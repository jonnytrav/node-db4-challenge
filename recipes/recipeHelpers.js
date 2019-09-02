const DB = require("../DBconfig.js");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return DB("recipes");
}

function getShoppingList(id) {
  return DB("recipe_ingredients")
    .where("recipe_id", `${id}`)
    .select("ingredient_id", "quantity");
}

function getInstructions(id) {
  return DB("recipes")
    .where({ id })
    .select("instructions");
}
