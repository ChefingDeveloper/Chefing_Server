const express = require('express')
const reservationCtrl = require('../controller/reservationController')

const reservation = express.Router()

// 1. 좌석수에 따른 날짜 가져오기
reservation.post('/getdate', reservationCtrl.getDate)


// 2. 날짜에 따른 시간 가져오기
reservation.get('/gettime/:date_id', reservationCtrl.getTime)

module.exports=reservation