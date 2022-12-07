const adminData = require("../models/admin.model");

class adminlogincontroller {
    async loginadmin (req,res,next) {
        try {
            return res.render('login')
        } catch (err) {
            return next(err)
        }
    }
    async loginadminpass (req,res,next) {
        try {
            return res.redirect('/userdata')
        } catch (error) {
           return next(err)
        }
    }
    async logout(req,res,next) {
        try {
            req.logout((err) => {
                res.json(err)
            });
            console.log("logout")
            res.redirect("back");
        } catch (err) {
            next(err)
        }
    }
}

module.exports = new adminlogincontroller()