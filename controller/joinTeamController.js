const teamData = require("../models/joinTeamModel");

exports.userTeamInsert = async (req,res)=>{
    try {
        const teamDetails = new teamData({
            fullName:req.body.fullName,
            email:req.body.email,
            phone:req.body.phone,
            title:req.body.title,
            speciality:req.body.speciality,
            yourName:req.body.yourName,
            youremail:req.body.youremail,
            yourPhone:req.body.yourPhone
        })

        const saveteamData = await teamDetails.save();

        req.flash("message",`Referral Successfully`)
        res.redirect("back")

    } catch (error) {
        console.log("teamDetails--error:::", error);
        
        req.flash("messages",`Referral Already Exists`)

        res.redirect("back")
    }
}

exports.referDataViewAll = async (req, res) => {
    try {
        
        const data = await teamData.find().select('-__v');

        res.status(201).json({
            message: "Get All User Data",
            status: 201,
            Total: data.length, 
            data: data
        })
    } catch (error) {
        console.log("userViewAll:-", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
}

module.exports.referViewAll = async (req, res) => {
    try {
        
        const data = await teamData.find().select('-__v');

        res.render("Referral",{
            referData : data,
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
}