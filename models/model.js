const mongoose = require("mongoose")

const YelpCampSchema = mongoose.Schema({
    name: String,
    image: String,
    description: String
 })

 const yelpcamps= new mongoose.model("yelpcamps", YelpCampSchema);

 module.exports = yelpcamps;