const mongoose = require("mongoose");
require("dotenv").config();

const adminSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});



const Admin = new mongoose.model('Admin', adminSchema);

module.exports = Admin;