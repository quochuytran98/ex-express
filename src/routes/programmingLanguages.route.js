const express = require("express");
const router = express.Router();
const { validator } = require('express-fastest-validator');
const programmingLanguagesController = require("../controllers/programmingLanguages.controller");

/* GET programming languages. */
router.get("/", programmingLanguagesController.get);
/* GET programming languages. */
router.get("/profile", programmingLanguagesController.profile);

/* POST programming language */
router.post(
  "/",
  validator({
    body: {
      name: { type: "string", min: 3, max: 15 },
      age: { type: "number", min: 8 },
    },
  }),
  programmingLanguagesController.create
);

/* PUT programming language */
router.put("/:id", programmingLanguagesController.update);

/* DELETE programming language */
router.delete("/:id", programmingLanguagesController.remove);

module.exports = router;
