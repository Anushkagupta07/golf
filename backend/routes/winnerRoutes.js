const express = require("express");

const router = express.Router();

const {

getWinners

} = require("../controllers/winnerController");

router.get("/winners/:user_id",getWinners);

module.exports = router;