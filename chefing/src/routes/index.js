const express = require('express');

const main = require('./main'); // main : 메인화면 메뉴리스트
const detail = require('./detail'); // detail : 메뉴 상세화면 ( main, side )

const router = express.Router();

/* GET home page. */
router.use('/main',main);
router.use('/detail',detail);

module.exports = router
