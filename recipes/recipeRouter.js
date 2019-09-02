const express = require("express");
const router = express.Router();
const DB = require("./recipeHelpers");

router.get("/", async (req, res) => {
  try {
    const recipes = await DB.getRecipes();
    res.status(200).json(recipes);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.get("/:id/ingredients", async (req, res) => {
  const { id } = req.params;
  try {
    const groceries = await DB.getShoppingList(id);
    res.status(200).json(groceries);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

router.get("/:id/steps", async (req, res) => {
  const { id } = req.params;
  try {
    const steps = await DB.getInstructions(id);
    res.status(200).json(steps);
  } catch (err) {
    res.status(400).json(err.message);
  }
});

module.exports = router;
