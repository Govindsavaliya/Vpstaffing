const adminData = require("../models/admin.model");

exports.adminRegistration = async (req, res) => {
    try {
        const userDetails = new adminData({
            email: req.body.email,
            password: req.body.password
        });

        const saveUSerData = await userDetails.save();

        res.status(201).json(
            {
                message: "Admin Registered",
                status: 201,
                data: saveUSerData
            }
        )
    } catch (error) {
        console.log("error:", error);
        res.status(400).json(
            {
                message: "Something went wrong",
                status: 400
            }
        )
    }
};


exports.adminRegistrationAndUpdate = async (req, res) => {
    try {
        var oldEmail = req.body.oldEmail;
       
        const data = await adminData.find({ email: oldEmail }).select('-__v');
        const dataId = data[0]?._id
        // console.log("dataId",dataId);
        const exists = await adminData.exists({ oldEmail })
       
        if (exists) {
            const dataa = await adminData.findByIdAndUpdate(
                {
                    _id: dataId
                },
                {
                    $set: {
                        email: req.body.email,
                        password: req.body.password,
                    }
                }
            )
                .then(() => {
                    res.status(200).json({
                        message: "Update Successfully",
                        status: 200
                    })

                })
                .catch((err) => {
                    res.status(500).json({
                        message: "Update Not Successfully",
                        status: 500,
                        err: err
                    })
                })
        } else {
            const adminDetails = new adminData({
                email: req.body.email,
                password: req.body.password,
            });
            const saveAdminData = await adminDetails.save();

            res.status(201).json({
                message: "Admin Insert",
                status: 201,
                data: saveAdminData
            });
        }

    
    } catch (error) {
        console.log("error:", error);
        res.status(400).json(
            {
                message: "Something went wrong",
                status: 400
            }
        )
    }
};

exports.adminLogin = async (req, res) => {
    try {

        const email = req.body.email;
        const pass = req.body.password;

        const data = await adminData.findOne({ email: email });

        if (!data) {
            req.flash("messages", `Data Not Exists.`)

            res.redirect("back")

            // res.status(404).json(
            //     {
            //         message: "Data Not Exists.",
            //         status: 404
            //     }
            // )
        } else {
            if (pass == data.password) {

                req.flash("message", `Login Successfully`)

                res.redirect("/userdata")
            } else {

                req.flash("messages", `password incorrect`)

                res.redirect("back")
            }
        }
    } catch (error) {
        req.flash("messages", `Something went wrong`)
        res.redirect("back")
    }
};

exports.adminLogout = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((curelement) => {
            return curelement.token !== req.token;
        })
        res.clearCookie("jwt");
        await req.user.save();
        res.status(201).json({
            message: "Logout Successfully",
            status: 201
        })
    } catch (error) {
        res.status(201).json({
            message: "Please Try Again..",
            status: 401,
        });
    }
}