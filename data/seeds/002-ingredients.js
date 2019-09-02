exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ingredients").insert([
        { id: 1, ingredient_name: "box of pasta" },
        { id: 2, ingredient_name: "1 lb. cheddar cheese" },
        { id: 3, ingredient_name: "quart of heavy cream" }
      ]);
    });
};
