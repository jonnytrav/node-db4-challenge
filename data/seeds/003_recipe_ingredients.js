exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipe_ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipe_ingredients").insert([
        { recipe_id: 1, ingredient_id: 1, quantity: 3 },
        { recipe_id: 1, ingredient_id: 2, quantity: 10 },
        { recipe_id: 1, ingredient_id: 3, quantity: 2 }
      ]);
    });
};
