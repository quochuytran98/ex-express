const express = require("express");
const router = express.Router();
const { validator } = require("express-fastest-validator");
const profile = require("../controllers/profile.controller");
const crawlerController = require("../controllers/crawler.controller");
const MetaController = require("../controllers/meta.controller");
const AccountController = require("../controllers/account.controller");
const AboutController = require("../controllers/about.controller");

/* GET programming languages. */
router.get("/", profile.get);
router.get("/policy ", AccountController.testTemplate);
/* GET programming languages. */
router.get("/love/:msg", profile.profile);
/* GET programming languages. */
router.get("/send-message/:msg", crawlerController.sendMessage);

/* POST programming language */
router.post(
  "/",
  validator({
    body: {
      name: { type: "string", min: 3, max: 15 },
      age: { type: "number", min: 8 },
    },
  }),
  profile.create
);



/* WEBHOOK */
router.post("/webhook", MetaController.callbackPost);
router.get("/webhook", MetaController.webhook);
router.get("/registerAPI", MetaController.registerMessengerAPI);

/* WEBHOOK */
router.post("/webhook-messenger", MetaController.callbackDataMessenger);
router.get("/webhook-messenger", MetaController.webhookMessenger);



/* ABOUT WEBSITE */
router.get("/term", AboutController.term);
router.get("/policy", AboutController.policy);

module.exports = router
