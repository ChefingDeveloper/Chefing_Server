const express = require('express')
const detailCtrl = require('../controller/detailController')

const detail = express.Router()
console.log('detail in')
detail.get('/mainmenu/:chef_id',detailCtrl.getMainMenuList) // 1. 메뉴 상세화면 ( 메인메뉴 가져오기 )
detail.get('/sidemenu/:chef_id',detailCtrl.getSideMenuList) // 1. 메뉴 상세화면 ( 사이드메뉴 가져오기 )

module.exports=detail