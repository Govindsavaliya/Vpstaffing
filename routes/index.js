const {Router} = require('express')
const express = require('express')
const routes = express.Router()
const loginController = require("../controller/loginController")
const applyController = require("../controller/applyController")
const contactController = require("../controller/contactController")
const joinTeamController = require("../controller/joinTeamController")
const {checkAdmin,checklogin}= require("../middleware/check")

//joinTeamController
routes.get("/userdata",checklogin,loginController.userViewAll)
routes.get("/userapply",checklogin,applyController.applyViewAll)
routes.get("/contect-us",checklogin,contactController.contactViewAll)
routes.get("/referral",checklogin,joinTeamController.referViewAll)

module.exports = routes