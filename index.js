const express = require("express");
const server = express();
const recipeRouter = require("./recipes/recipeRouter.js");

server.use(express.json());
server.use("/api/recipes", recipeRouter);

// !!! SET UP .ENV FILE LATER !!! //
const PORT = 4000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
