const express = require("express");
const router = express.Router();
const { validator } = require("express-fastest-validator");
const crawlerController = require("../controllers/crawler.controller");
const chatGPTController = require("../controllers/chatGPT.controller");
const viewController = require("../controllers/view.controller");


/* GET. */
router.get("/send-message/:msg", crawlerController.sendMessage);
router.get("/p", crawlerController.test);
router.get("/chat", viewController.viewChat);
/* POST. */
router.post("/openai/chat", chatGPTController.chatMessage);
router.post("/openai/image", chatGPTController.chatImage);




module.exports = router
