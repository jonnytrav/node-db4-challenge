const express = require("express");
const server = express();
const recipeRouter = require("./recipes/recipeRouter.js");
const ingredientsRouter = require("./ingredients/ingredientRouter.js");

server.use(express.json());
server.use("/api/recipes", recipeRouter);
server.use("/api/ingredients", ingredientsRouter);

// !!! SET UP .ENV FILE LATER !!! //
const PORT = 4000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
