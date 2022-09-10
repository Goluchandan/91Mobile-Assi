const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://91mobiles:rsobdD74rDvLcLFR@cluster0.xm70bq9.mongodb.net/?retryWrites=true&w=majority")

module.exports = connection;
