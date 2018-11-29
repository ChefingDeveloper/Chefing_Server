const express = require('express');

const main = require('./main'); // main : 메인화면 메뉴리스트
const detail = require('./detail'); // detail : ( 메뉴 탭, 매장 탭, 셰프 탭 정보 불러오기 )
const menu = require('./menu'); // menu : 메뉴 상세화면

/* GET home page. */
const router = express.Router();

router.use('/main',main); 
router.use('/detail',detail);
router.use('/menu',menu);

module.exports = router
