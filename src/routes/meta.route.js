const express = require("express");
const router = express.Router();
const { validator } = require("express-fastest-validator");
const MetaController = require("../controllers/meta.controller");

/* POST programming language */
router.post("/v1/callback/post", MetaController.callbackPost);
router.get("/v1/callback/post", MetaController.test);

module.exports = router;
