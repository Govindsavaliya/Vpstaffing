const multer = require("multer");
const applyData = require("../models/applyModel");
const path = require("path");

var storage = multer.diskStorage({
    destination: function (req, res, cb) {
        cb(null, "./public/uploads")
    },
    filename: function (req, file, cb) {
        console.log("bdfjvgdh",file)
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000 },
}).single("file")

exports.applyInsert = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.log("teamDetails--error:::", err);

            req.flash("messages", `Something Went Wrong`)

            res.redirect("back")
        }
        try {
            // console.log('path', req.file.path);
            const photoPath = req.file.path.split("file_")[1];
            // console.log('photoPath', photoPath);
            const cusArry = "uploads/file_" + photoPath;
            // console.log('cusArry', cusArry);

            const applyDetails = new applyData({
                fullName: req.body.fullName,
                email: req.body.email,
                phone: req.body.phone,
                zipCode: req.body.zipCode,
                title: req.body.title,
                speciality: req.body.speciality,
                photo: cusArry
            })


            const saveApplyData = await applyDetails.save();
            req.flash("message", `Thanks for apply! We will get in touch with you shortly`)
            res.redirect("back")

        } catch (error) {
            console.log("teamDetails--error:::", error);

            req.flash("messages", `Something Went Wrong`)

            res.redirect("back")
        }
    })
}





module.exports.applyViewAll = async (req, res) => {
    try {

        const data = await applyData.find().select('-__v');

        res.render("Userapply", {
            applyData: data,
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