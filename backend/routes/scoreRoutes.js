const express = require("express");

const router = express.Router();

const scoreController = require("../controllers/scoreController");


// add score
router.post("/score", scoreController.addScore);


// get last 5 scores
router.get("/scores/:user_id", scoreController.getScores);


module.exports = router;