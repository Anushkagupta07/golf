const express = require("express");

const router = express.Router();

const {
 getCharities
} = require("../controllers/charityController");

router.get("/charities", getCharities);

module.exports = router;