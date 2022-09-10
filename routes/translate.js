const express = require("express");
const router = express.Router();
const translateController = require("../controllers/translate");
const { isAuth } = require("../controllers/auth");

router.post("/message", isAuth, translateController.translateMessage);

module.exports = router;
