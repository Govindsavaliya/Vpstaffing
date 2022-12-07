const mongoose = require("mongoose");
const validatore = require("validator");

const userSchema = mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true,
        unique:true
    },
    email: {
        type: String,
        required: true,
        unique:true,
        validate(value) {
            if (!validatore.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }
    },
});


const User = new mongoose.model('userLogin', userSchema);
module.exports = User;