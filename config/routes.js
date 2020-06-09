const express = require("express");
const router = express.Router();
const controller = require("../controllers/mails.controllers");

router.get("/", controller.home);
router.post("/send-mail", controller.sendEmail);

module.exports = router;
