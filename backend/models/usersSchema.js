const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    imgpath:{
        type:String,
        required:true
    },
});


// create model

const users = new mongoose.model("file",userSchema);

module.exports = users;

