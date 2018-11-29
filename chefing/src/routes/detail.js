const express = require('express')
const detailCtrl = require('../controller/detailController')

const detail = express.Router()

detail.get('/mainmenu/:chef_id',detailCtrl.getMainMenuList) //메뉴 상세화면 ( 메인메뉴 가져오기 )

module.exports= detail