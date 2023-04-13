const mongoose = require("mongoose")
const kiteSchema = mongoose.Schema({
    Kite_color: String,
    Kite_length: String,
    Kite_cost: String,
    Kite_sides: String
})
module.exports = mongoose.model("Kite",
kiteSchema)