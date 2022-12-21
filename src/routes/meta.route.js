const express = require("express");
const router = express.Router();
const { validator } = require("express-fastest-validator");
const MetaController = require("../controllers/meta.controller");

/* POST programming language */
router.post("/webhook", MetaController.callbackPost);
router.get("/webhook", MetaController.webhook);

module.exports = router;
