const express = require('express')
const accountCtrl = require('../controller/accountController')

const account = express.Router()

// 1. 로그인
account.post('/login',accountCtrl.login) 

module.exports=account