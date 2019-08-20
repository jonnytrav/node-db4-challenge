const DB = require("../DBconfig.js");

module.exports = {
  getRecipes
};

function getRecipes() {
  return DB("recipes");
}
