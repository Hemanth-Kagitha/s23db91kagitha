var kite = require('../models/kite');
// List of all kites

// List of all kites
exports.kite_list = async function(req, res) {
    try{
    thekite = await kite.find();
    res.send(thekite);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// for a specific kite.
exports.kite_detail = function(req, res) {
res.send('NOT IMPLEMENTED: kite detail: ' + req.params.id);
};
// Handle kite create on POST.
// Handle kite create on POST.
exports.kite_create_post = async function(req, res) {
    console.log(req.body)
    let document = new kite();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"kite_type":"goat", "cost":12, "size":"large"}
    document.Kite_color = req.body.Kite_color;
    document.Kite_length = req.body.Kite_length;
    document.Kite_cost = req.body.Kite_cost;
    document.Kite_sides = req.body.Kite_sides;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// Handle kite delete form on DELETE.
exports.kite_delete = function(req, res) {
res.send('NOT IMPLEMENTED: kite delete DELETE ' + req.params.id);
};
// Handle kite update form on PUT.
exports.kite_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: kite update PUT' + req.params.id);
};

exports.kite_view_all_Page = async function(req, res) {
    try{
    thekite = await kite.find();
    res.render('kite', { title: 'kite Search Results', results: thekite });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
}