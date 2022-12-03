const express = require("express");
const router = express.Router();
const { validator } = require('express-fastest-validator');
const profile = require("../controllers/profile.controller");
const crawlerController = require("../controllers/crawler.controller")

/* GET programming languages. */
router.get("/", profile.get);
/* GET programming languages. */
router.get("/love", profile.profile);
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

/* PUT programming language */
router.put("/:id", profile.update);

/* DELETE programming language */
router.delete("/:id", profile.remove);

module.exports = router;
