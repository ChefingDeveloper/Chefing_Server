const express = require('express')
const menuCtrl = require('../controller/menuController')

const menu = express.Router()
menu.get('/:menu_id',menuCtrl.getMenu) // 메뉴 정보 가져오기

module.exports = menu