const contactData = require("../models/contactUsModel");

exports.userContactInsert = async (req,res)=>{
    try {
        const contactDetails = new contactData({
            fullName:req.body.fullName,
            email:req.body.email,
            phone:req.body.phone,
            inquiry:req.body.inquiry,
            message:req.body.message,
        })

        const saveContactData = await contactDetails.save();

        req.flash("message",`Thanks for contacting us! We will get in touch with you shortly`)
        res.redirect("back")

        // res.status(201).json(
        //     {
        //         message: "User Contact Registered",
        //         status: 201,
        //         data: saveContactData
        //     }
        // )
    } catch (error) {
        console.log("contactDetails--error:::", error);
        
        req.flash("messages",`Something Went Wrong`)
        
        res.redirect("back")
        // res.status(400).json(
        //     {
        //         message: "Something Went Wrong",
        //         status: 400
        //     }
        // )
    }
}

module.exports.contactViewAll = async (req, res) => {
    try {
        
        const data = await contactData.find().select('-__v');

        res.render("contect-us",{
            contectData : data,
            message: req.flash("message"),
            messages: req.flash("messages")
        })

        // res.status(201).json({
        //     message: "Get All User Data",
        //     status: 201,
        //     Total: data.length, 
        //     data: data
        // })
    } catch (error) {
        console.log("userViewAll:-", error);
        res.status(500).json({
            message: "Something Went Wrong",
            status: 500
        })
    }
}