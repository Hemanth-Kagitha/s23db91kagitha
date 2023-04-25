var express = require('express');
const kite_controlers= require('../controllers/kite');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
  //res.render('kite', { title: 'Search Results Kite' });
//});
// A little function to check if we have an authorized user and continue on

// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}

router.get('/', kite_controlers.kite_view_all_Page );
/* GET detail kite page */
router.get('/detail',secured, kite_controlers.kite_view_one_Page);


/* GET create kite page */
router.get('/create', secured, kite_controlers.kite_create_Page);

//router.get('/update', kite_controlers.kite_update_Page);

router.get('/delete', secured,  kite_controlers.kite_delete_Page);

router.get('/update', secured, kite_controlers.kite_update_Page);
module.exports = router;

