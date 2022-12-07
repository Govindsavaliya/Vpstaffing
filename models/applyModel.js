const mongoose = require("mongoose");
const validatore = require("validator");

const appplySchema = mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate(value) {
            if (!validatore.isEmail(value)) {
                throw new Error("Invalide Email")
            }
        }
    },
    phone:{
        type: String,
        required: true,
        unique:true
    },
    zipCode:{
        type: String,
        required: true,
        // unique:true
    },
    title:{
        type: String,
        required: true
    },
    speciality:{
        type: String,
        required: true
    },
    photo:{
        type: String,
        required: true
    }
})

const Apply = new mongoose.model('userApply', appplySchema);
module.exports = Apply;