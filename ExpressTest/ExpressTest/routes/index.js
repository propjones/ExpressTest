﻿var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express', message: 'hello there homie' });
});
// test
module.exports = router;