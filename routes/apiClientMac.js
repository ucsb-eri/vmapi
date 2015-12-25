var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:client', function(req, res, next) {
  res.send('respond with a mac address for client:'+req.params.client);
});

module.exports = router;
