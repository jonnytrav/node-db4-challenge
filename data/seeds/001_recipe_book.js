exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          id: 1,
          recipe_name: "Mac n Cheese",
          instructions:
            "Cook pasta al dente, strain, mix in cheese until melted, add heavy cream and butter, bake at 220 for 45 minutes."
        }
      ]);
    });
};
