const DB = require("../DBconfig.js");

module.exports = {
  getRecipes,
  getShoppingList
};

function getRecipes() {
  return DB("recipes");
}

function getShoppingList(id) {
  return DB("recipe_ingredients").where("recipe_id", `${id}`);
}
