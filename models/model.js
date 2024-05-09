const mongoose = require("mongoose");
const {Schema} = mongoose;


const urlSchema = new Schema({
    url : String,
    shortener : Number
});


module.exports = mongoose.model("Url", urlSchema);