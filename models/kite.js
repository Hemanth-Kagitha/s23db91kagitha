const mongoose = require("mongoose")
const kiteSchema = mongoose.Schema({
    Kite_color: {type: String, minlength: 1, maxlength: 50},
    Kite_length: {type: String, minlength: 1, maxlength: 50},
    Kite_cost: {type: String, min: 03, maxlength: 3333},
    Kite_sides: {type: String, minlength: 1, maxlength: 30}
})
module.exports = mongoose.model("Kite",kiteSchema)

