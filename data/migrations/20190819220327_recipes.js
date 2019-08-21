exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl
        .text("recipe_name", 64)
        .notNullable()
        .unique();
      tbl.text("instructions", 2800).notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl
        .text("ingredient_name", 32)
        .notNullable()
        .unique();
    })
    .createTable("recipe_ingredients", tbl => {
      tbl
        .integer("recipe_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("recipes");
      tbl
        .integer("ingredient_id")
        .notNullable()
        .unsigned()
        .references("id")
        .inTable("ingredients");
      tbl
        .integer("quantity")
        .notNullable()
        .unsigned();
      tbl.primary(["recipe_id", "ingredient_id"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
