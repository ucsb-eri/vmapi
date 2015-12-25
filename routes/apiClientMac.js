var express = require('express');
var router = express.Router();

// Really need to do a full check here like we do in apps, find a way to reuse that code
var conf = require('../config.json');
var data = require(conf.dhcpMap);

/* GET users listing. */
router.get('/:client', function(req, res, next) {
    var myResult = '';
    if ( data.hasOwnProperty(req.params.client)) myResult = data[req.params.client];
    res.send(myResult);
});

module.exports = router;
