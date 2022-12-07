const router = require("express").Router();
const multer = require("multer");
const path = require("path");

const  {
    applyInsert,
}=require("../controller/applyController")

router.post("/applyInsert", applyInsert)

module.exports = router;
