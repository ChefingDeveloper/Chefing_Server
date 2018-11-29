const express = require('express')
const detailCtrl = require('../controller/detailController')

const detail = express.Router()
console.log('detail in')

// 1. 메뉴 탭
detail.get('/mainmenu/:chef_id',detailCtrl.getMainMenuList) // 1-1. 메뉴 상세화면 ( 메인메뉴 가져오기 )
detail.get('/sidemenu/:chef_id',detailCtrl.getSideMenuList) // 1-2. 메뉴 상세화면 ( 사이드메뉴 가져오기 )

// 2. 매장 탭 
detail.get('/shopinfo/:shop_id', detailCtrl.getShopInfo) 

// 3. 셰프 탭
detail.get('/chefinfo/:chef_id',detailCtrl.getChefInfo)

module.exports=detail