const mongoose = require("mongoose");
const validatore = require("validator");


const contactSchema = mongoose.Schema({
    fullName
    :{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique:true,
        validate(value) {
            if (!validatore.isEmail(value)) {
                throw new Error("Invalide Email")
            }
        }
    },
    phone:{
        type: String,
        required: true,
        // unique:true
    },
    inquiry:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    }
})

const Contact = new mongoose.model('userContact', contactSchema);
module.exports = Contact;