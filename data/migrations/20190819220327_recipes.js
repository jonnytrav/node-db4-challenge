exports.up = function(knex) {
  return knex.schema.createTable("recipes", tbl => {
    tbl.increments();
    tbl
      .text("recipe_name", 48)
      .notNullable()
      .unique();
    tbl.text("instructions").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipes"); //NEEDS TO BE DROPPED LAST WHEN LINKED TO INGRED. W/ FK
};
