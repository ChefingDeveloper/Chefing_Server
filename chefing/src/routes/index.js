const express = require('express');

const main = require('./main'); // main : 메인화면 메뉴리스트
const detail = require('./detail'); // detail : 메뉴 상세화면 ( main, side )

/* GET home page. */
const router = express.Router();

router.use('/main',main);
router.use('/detail',detail);

module.exports = router
