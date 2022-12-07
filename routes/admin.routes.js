const router = require("express").Router();
const passport = require("passport");
require("../middleware/localStretagy")

const {
    adminRegistration,
    adminRegistrationAndUpdate,
} = require("../controller/admin.controller");
const adminLogincontroller = require("../controller/admin.logincontroller");


router.post("/adminRegistration", adminRegistration);
router.post("/adminRegistrationAndUpdate",adminRegistrationAndUpdate)
router.post('/adminLogin', passport.authenticate('local', { failureRedirect: "/login" }), adminLogincontroller.loginadminpass)
router.get("/adminLogout", adminLogincontroller.logout);

module.exports = router;   

