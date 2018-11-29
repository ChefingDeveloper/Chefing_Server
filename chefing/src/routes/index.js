const express = require('express');

// 1. main
const main = require('./main');

const router = express.Router();

/* GET home page. */
router.use('/main',main);

module.exports = router
