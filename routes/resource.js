var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var kite_controller = require('../controllers/kite');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// kite ROUTES ///
// POST request for creating a kite.
router.post('/kite', kite_controller.kite_create_post);
// DELETE request to delete kite.
router.delete('/kite/:id', kite_controller.kite_delete);
// PUT request to update kite.
router.put('/kite/:id', kite_controller.kite_update_put);
// GET request for one kite.
router.get('/kite/:id', kite_controller.kite_detail);
// GET request for list of all kite items.
router.get('/kite', kite_controller.kite_list);
module.exports = router;