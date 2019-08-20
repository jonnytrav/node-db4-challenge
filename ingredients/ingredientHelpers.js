const DB = require("../DBconfig");

module.exports = {
  findIngredients
};

function findIngredients() {
  return DB("ingredients");
}
