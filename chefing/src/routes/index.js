const express = require('express');

const account = require('./account'); // account : 계정 관리
const main = require('./main'); // main : 메인화면 메뉴리스트
const detail = require('./detail'); // detail : ( 메뉴 탭, 매장 탭, 셰프 탭 정보 불러오기 )
const menu = require('./menu'); // menu : 메뉴 상세화면
const cart = require('./cart'); // cart : 장바구니 추가, 리스트, 삭제
const reservation = require('./reservation') // reservation : 예약하기

/* GET home page. */
const router = express.Router();

router.use('/account',account);
router.use('/main',main); 
router.use('/detail',detail);
router.use('/menu',menu);
router.use('/cart',cart);
router.use('/reservation',reservation);

module.exports = router
