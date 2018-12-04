const express = require('express')
const accountCtrl = require('../controller/accountController')

const account = express.Router()

// 1. 로그인 (jwt 적용)
// account.post('/login',accountCtrl.login) 

// 1. 로그인 (jwt 미적용)
account.post('/signin',accountCtrl.signin)

module.exports=account