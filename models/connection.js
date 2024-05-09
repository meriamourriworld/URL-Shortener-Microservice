require('dotenv').config();
const mongoose = require("mongoose");


module.exports.connect = mongoose.connect(process.env.MONGO_URL)
                                .then(()=> console.log("Connection established with urlShortenerDb.."))
                                .catch((err)=> console.log("DataBase Connection Failed!! " + err));
