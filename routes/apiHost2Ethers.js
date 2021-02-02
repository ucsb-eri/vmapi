const fs = require('fs');
var express = require('express');
var router = express.Router();

// Really need to do a full check here like we do in apps, find a way to reuse that code
var conf = require('../config.json');
let data = JSON.parse(fs.readFileSync(conf.host2ethersMap,'utf-8'));

/* GET users listing. */
router.get('/:host', function(req, res, next) {
    var myResult = '';
    if ( data.hasOwnProperty(req.params.host)) myResult = data[req.params.host];
    res.send(myResult);
});

module.exports = router;
