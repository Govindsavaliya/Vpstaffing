const router = require("express").Router();

const {
    userTeamInsert,
    referDataViewAll
} = require("../controller/joinTeamController");

router.post("/userTeamInsert", userTeamInsert)
// router.get("/referDataViewAll",referDataViewAll)

module.exports = router;