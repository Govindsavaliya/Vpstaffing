const router = require("express").Router();


const {
    userSignUp,
    userViewAll,
} = require("../controller/loginController");

router.post("/userSignUp", userSignUp);
router.get("/userViewAll",userViewAll)

module.exports = router;
