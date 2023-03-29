const express = require("express");
const router = express.Router();
const { validator } = require("express-fastest-validator");
const profile = require("../controllers/profile.controller");
const crawlerController = require("../controllers/crawler.controller");
const MetaController = require("../controllers/meta.controller");
const AccountController = require("../controllers/account.controller");
const AboutController = require("../controllers/about.controller");


/* GET programming languages. */
router.get("/send-message/:msg", crawlerController.sendMessage);




module.exports = router
