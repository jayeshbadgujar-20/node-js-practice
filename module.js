
const { string } = require("joi");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    mobile: {
        type: Number,
        required: true
    },

    password:{
        type:String,
        required:true
    },

    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("userInfo", userSchema);