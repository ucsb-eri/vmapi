var express = require('express');
var router = express.Router();

// Really need to do a full check here like we do in apps, find a way to reuse that code
var conf = require('../config.json');
var data = require(conf.dhcpMap);

/* GET users listing. */
router.get('/:client', function(req, res, next) {
    var status = false;
    if ( data.hasOwnProperty(req.params.client)){
        status = true;
    }
    res.send('respond with a yes or now about whether the client is defined: '+req.params.client+', status: '+status);
});

module.exports = router;
