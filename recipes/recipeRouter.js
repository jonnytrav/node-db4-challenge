const express = require("express");
const router = express.Router();
const DB = require("./recipeHelpers");

router.get("/", async (req, res) => {
  try {
    const recipes = await DB.find();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

module.exports = router;
