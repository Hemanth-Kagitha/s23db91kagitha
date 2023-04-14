var express = require('express');
const kite_controlers= require('../controllers/kite');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
  //res.render('kite', { title: 'Search Results Kite' });
//});


router.get('/', kite_controlers.kite_view_all_Page );
module.exports = router;