var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/profile');
  //res.render('index', { authenticated: req.isAuthenticated() });
});

module.exports = router;
