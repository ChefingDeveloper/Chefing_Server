// jwt 적용
exports.checkEmail = (connection, user_id) => {
  return new Promise((resolve, reject)=> {
    const Query = `SELECT *
                   FROM USER
                   WHERE user_id=?`
    connection.query(Query,[user_id],(err, result)=> {
      err && reject(err)
      resolve(result)
    })
  })
}

// jwt 적용
exports.inserUserData = (connection, data) => {
  return new Promise((resolve, reject) => {
    const Query = `INSERT INTO
                   USER(user_id, kakao_token, user_gender, user_age, user_email)
                   VALUES (?,?,?,?,?)`
    connection.query(Query, [data.user_id, data.kakao_token, data.user_gender, data.user_age, data.user_email],(err, result)=> {
      err && reject(err)
      resolve(result)
    })
  })
}

/************ jwt 미적용 **************/

// 1. 토큰 가져오기
exports.getUserInfo = (connection, user_token) => {
  return new Promise((resolve, reject)=> {
    const Query = `SELECT * FROM USER where user_token=?`
    connection.query(Query,[user_token],(err, result)=> {
      err && reject(err)
      resolve(result)
    })
  })
}

// 2. 유저 등록
exports.addUser= (connection,data)=> {
  return new Promise((resolve, reject)=> {
    const Query = `INSERT INTO
                   USER(user_id, user_token, user_nickname, user_profile)
                   VALUES (?,?,?,?)`
    connection.query(Query, [data.user_id, data.user_token, data.user_nickname, data.user_profile],(err, result)=> {
      err && reject(err)
      resolve(result)
    })
  })
}

// 3. 토큰 값 변경
exports.updateToken =(connection, user_token, user_id)=> {
  return new Promise((resolve, reject)=> {
    const Query = `UPDATE USER SET user_token=${user_token}
                   WHERE user_id=${user_id}`
    connection.query(Query, [user_token, user_id], (err, result)=> {
      err && reject(err)
      resolve(result)
    })               
  })
}


