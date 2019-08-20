const express = require("express");
const router = express.Router();
const DB = require("./ingredientHelpers.js");

router.get("/", async (req, res) => {
  try {
    const ingredients = await DB.findIngredients();
    res.status(200).json(ingredients);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

module.exports = router;
