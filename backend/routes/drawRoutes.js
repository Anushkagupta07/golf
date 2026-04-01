const express = require("express");

const router = express.Router();

const {runDraw} = require("../controllers/drawController");

router.get("/draw",runDraw);

module.exports = router;