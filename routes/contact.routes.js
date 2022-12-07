const router = require("express").Router();

const {
    userContactInsert
} = require("../controller/contactController");

router.post("/userContactInsert", userContactInsert)

module.exports = router;
