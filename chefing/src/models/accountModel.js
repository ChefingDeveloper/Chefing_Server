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