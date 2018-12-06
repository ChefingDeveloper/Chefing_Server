const express = require('express')
const cartCtrl = require('../controller/cartController')

const cart = express.Router()

// 1. 장바구니 추가
cart.post('/addcart', cartCtrl.addCart)


// 2. 장바구니 리스트
cart.post('/getcart', cartCtrl.getCart)


// 3. 장바구니 삭제
cart.delete('/deletecart/:cart_id', cartCtrl.deleteCart)


// 4. 레스토랑 아이디 가져오기
cart.get('/getshopid/:menu_id', cartCtrl.getShopId)

module.exports=cart