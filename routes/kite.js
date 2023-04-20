var express = require('express');
const kite_controlers= require('../controllers/kite');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
  //res.render('kite', { title: 'Search Results Kite' });
//});


router.get('/', kite_controlers.kite_view_all_Page );
/* GET detail kite page */
router.get('/detail', kite_controlers.kite_view_one_Page);


/* GET create kite page */
router.get('/create', kite_controlers.kite_create_Page);

router.get('/update', kite_controlers.kite_update_Page);

router.get('/delete', kite_controlers.kite_delete_Page);

module.exports = router;

