var express = require('express');
var router = express.Router();
// var MongoClient = require("mongodb").MongoClient;

router.get('/', function(req, res, next) {
    res.send('API is working properly');
});

module.exports = router;