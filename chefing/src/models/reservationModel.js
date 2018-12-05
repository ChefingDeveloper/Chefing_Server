// 1. 좌석수에 따른 날짜 가져오기
exports.getdate = (connection, data) => {
    return new Promise((resolve, reject)=> {
        const Query = `
        SELECT * FROM DATE
        WHERE shop_id=${data.shop_id} AND seat_count=${data.seat_count}
        `
        connection.query(Query,[data.shop_id, data.seat_count],(err, result)=> {
            err && reject(err)
            resolve(result)
        })
    })
}


// 2. 날짜에 따른 시간과 좌석 수 가져오기 
exports.gettime = (connection, data) => {
    return new Promise((resolve, reject)=> {
        const Query = `
        SELECT * FROM TIME
        WHERE date_id=${data.date_id}
        `
        connection.query(Query,[data.date_id],(err, result)=> {
            err && reject(err)
            resolve(result)
        })
    })
}