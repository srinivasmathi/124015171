const express = require("express");
const NumberController = require("../controllers/NumberController");
const router = express.Router();

router.get("/numbers", NumberController.get);

module.exports = router;