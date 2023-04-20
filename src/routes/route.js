const express = require("express");
const router = express.Router();
const { validator } = require("express-fastest-validator");
const crawlerController = require("../controllers/crawler.controller");
const chatGPTController = require("../controllers/chatGPT.controller");


/* GET programming languages. */
router.get("/send-message/:msg", crawlerController.sendMessage);
router.get("/p", crawlerController.test);
router.post("/chat", chatGPTController.chatMessage);
router.post("/image", chatGPTController.chatImage);




module.exports = router
