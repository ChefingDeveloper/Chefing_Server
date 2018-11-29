const express = require('express')

const mainCtrl = require('../controller/mainController')

const main = express.Router()

main.get('/',mainCtrl.getMainList)

module.exports = main