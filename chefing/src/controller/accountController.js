const dbConnection = require('../lib/dbConnection')
const jwt = require('../lib/token')
const request = require('request-promise');
const accountModel = require('../models/accountModel')
const { respondJson, respondOnError } = require('../lib/response')

/************* JWT 적용 **************/
// exports.login = async(req, res) => {
//   const connection = await dbConnection()

//  let checkEmailResult
//  let insertUserResult

//   let kakao_token = req.body.kakao_token;

//   if(!kakao_token){
//     return next('401');
//   }

//   let option = {
//     method : 'GET',
//     uri: 'https://kapi.kakao.com/v2/user/me',
//     json : true,
//     headers : {
//       'authorization': "Bearer " +  kakao_token
//     }
//   }

//   try {

//      let kakaoResult = await request(option);
//      let result={};
//      console.log(kakaoResult);
//      result.thumbnail_image = kakaoResult.properties.thumbnail_image;
//      result.age_range = kakaoResult.kakao_account.age_range;

//      var user_id = kakaoResult.id;
//      var user_img = kakaoResult.properties.thumbnail_image;
//      var user_age = kakaoResult.kakao_account.age_range;
//      var user_email = kakaoResult.kakao_account.email;
//      var user_gender = kakaoResult.kakao_account.gender;
//      var token;
//      var chkToken;  


//      let data ={}
//      data = {
//        user_id,
//        kakao_token,
//        user_gender,
//        user_age,
//        user_email,
//      }

//      console.log("jwt token here ======================");
//      console.log('user_id: '+data.user_id)
//      console.log('kakao_token: '+kakao_token)
//      console.log('user_gender: '+user_gender)
//      console.log('user_age: '+user_age)
//      console.log('user_email: '+user_email)
//      console.log('token: '+jwt.sign(user_id));
//      console.log("==============================");
//      if(req.headers.authorization != undefined){
//        chkToken = jwt.verify(req.headers.authorization);
//      }
//      if(chkToken != undefined){ // 토큰이 이미 있는 경우 (로그인 되어있는 경우)
//       console.log("토큰이 있습니다");
//       if(chkToken.user_id == user_id){
//         console.log("성공적으로 로그인 되었습니다");
//         token = jwt.sign(data.user_id);
//         console.log(token);
//         res.status(200).send({
//             result : {
//             message : "success",
//             token : token
//             }
//         });
//       } else { // 토큰이 만료된 경우 재발급
//         console.log("기간이 만료되었습니다. 재발급 합니다");
//         token = jwt.sign(data.user_id);
//         res.status(200).send({
//             "result" : {
//             message : "your token ended and reissue new token",
//             token : token
//             }
//           });
//         }
//     }
//     else { // 토큰이 없는 경우
//       checkEmailResult = await accountModel.checkEmail(connection, data.user_id)
//         if(checkEmailResult.length != 0){ // 기기를 변경했을 경우
//             console.log("다른기기에서 접속했습니다");
//             token = jwt.sign(checkEmailResult[0].user_id);
//             res.status(200).send({
//                 "result" : {
//                     message : "new device login",
//                     token : token
//                 }
//             });
//         } else{ // 다른 기기이고 회원이 아닐때
//           insertUserResult = await accountModel.inserUserData(connection, data)
//             console.log("비회원입니다.");
//             // if(!insertUserResult){
//             //     return next("500");
//             //   }
//             token = jwt.sign(insertUserResult[0].user_id);

//             res.status(200).send({
//                 "result" : {
//                     message : "sign up success",
//                     token : token
//                     }
//                 })
//             }
//         }
//     }
//     catch(e) {
//       respondOnError(e.message, res, 500)
//     }
//     finally {
//       connection.release()
//     }
// }


/************* JWT 미적용 **************/
exports.signin = async(req, res) => {
  const connection = await dbConnection()

  let getUserInfoResult
  let addUserResult
  let updateTokenResult

  let user_token = req.body.user_token;

  if(!user_token){
    return next('401')
  }

  let option = {
    method : 'GET',
    uri: 'https://kapi.kakao.com/v2/user/me',
    json : true,
    headers : {
      'authorization': "Bearer " +  user_token
    }
  }

  try {

    let kakaoResult = await request(option);
    let result = {};
    console.log(kakaoResult);

    const user_id = kakaoResult.id;
    const user_profile = kakaoResult.properties.profile_image;
    const user_nickname = kakaoResult.properties.nickname;


    let data = {}
    data={
      user_id,
      user_profile,
      user_nickname,
      user_token,
    }

    getUserInfoResult = await accountModel.getUserInfo(connection,user_token)

    // 만약 회원 정보가 없다면,
    if(getUserInfoResult==null){
      addUserResult = await accountModel.addUser(connection,data)
      respondJson('success sign up', getUserInfoResult, res, 200)
    }else if(getUserInfoResult[0].user_token != user_token){ // 로그아웃 후 로그인 시
      updateTokenResult = await accountModel.updateToken(connection, user_token, user_id)
      respondJson('new token',getUserInfoResult, res, 200)
    }
    else {
      respondJson('success login', getUserInfoResult, res, 200)
    }
    
  } catch (e) {

    console.log(e)
    respondOnError(e.message, res, 500)
    
  } finally {
    connection.release()
  }

}