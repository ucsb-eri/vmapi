const fs = require('fs');
var express = require('express');
var router = express.Router();

// Really need to do a full check here like we do in apps, find a way to reuse that code
var conf = require('../config.json');
//var data = require(conf.ethers2hostMap);
let data = JSON.parse(fs.readFileSync(conf.ethers2hostMap,'utf-8'));

/* GET users listing. */
router.get('/:mac', function(req, res, next) {
    var myResult = '';
    if ( data.hasOwnProperty(req.params.mac)) myResult = data[req.params.mac];
    res.send(myResult);
});

module.exports = router;
