const express = require("express");

const router = express.Router();

const {selectCharity} = require("../controllers/userController");

router.post("/select-charity",selectCharity);

module.exports = router;