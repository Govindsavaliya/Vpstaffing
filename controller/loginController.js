const userData = require("../models/loginModel");

exports.userSignUp = async (req,res)=>{
    try {
        const userDetails = new userData({
            fullName:req.body.fullName,
            title:req.body.title,
            phone:req.body.phone,
            email:req.body.email
        })
        const saveUserData = await userDetails.save();
        console.log(saveUserData);
        req.flash("message",`Successfully registered to get latest update for new job opportunity.`)
        res.redirect("back")

    } catch (error) {
        console.log("userDetails--error:::", error);
        
        req.flash("messages",`Phone No Or Email Already Exists`)


        res.redirect("back")
    }
};

module.exports.userViewAll = async (req, res) => {
    try {
        
        const data = await userData.find().select('-__v');

        res.render("userdata",{
            userdatas : data,
            message: req.flash("message"),
            messages: req.flash("messages")
        })
    } catch (error) {
        console.log("userViewAll:-", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
};