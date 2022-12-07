const mongoose = require("mongoose");
const validatore = require("validator");

const teamSchema = mongoose.Schema({
    fullName:{
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
        unique:true
    },
    title:{
        type: String,
        required: true
    },
    speciality:{
        type: String,
        required: true
    },
    yourName:{
        type: String,
        required: true
    },
    youremail: {
        type: String,
        required: true,
        // unique:true,
        validate(value) {
            if (!validatore.isEmail(value)) {
                throw new Error("Invalide Email")
            }
        }
    },
    yourPhone:{
        type: String,
        required: true,
        // unique:true
    },
})

const Team = new mongoose.model('userTeam', teamSchema);
module.exports = Team;