const express = require('express')
const mainCtrl = require('../controller/mainController')

const main = express.Router()
main.get('/',mainCtrl.getMainList) // 메인리스트 가져오기

module.exports = main