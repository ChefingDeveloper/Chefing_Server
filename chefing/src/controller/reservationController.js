const { respondJson, respondOnError } = require('../lib/response')
const dbConnection = require('../lib/dbConnection')
const reservationData = require('../models/reservationModel')

// 1. 좌석수에 따른 날짜가져오기
exports.getDate = async (req, res)=> {
    const connection = await dbConnection()

    const { shop_id } = req.body
    const { seat_count } = req.body

    let getDateResult
    let data ={}
    data = {
        shop_id,
        seat_count,
    }

    try {

        getDateResult = await reservationData.getdate(connection, data)
        respondJson('success', getDateResult, res, 200)

    } catch (e) {

        respondOnError(e.message, res, 500)  

    } finally { 
        connection.release()
    }
}

// 2. 날짜에 따른 시간 가져오기
exports.getTime = async (req, res)=> {
    const connection = await dbConnection()
    const { date_id } = req.params

    let getTimeResult
    let data ={}
    data = {
        date_id,
    }

    try {

        getTimeResult = await reservationData.gettime(connection, data)
        respondJson('success', getTimeResult, res, 200)
        
    } catch (e) {

        respondOnError(e.message, res, 500)  
        
    } finally {
        connection.release()
    }
}