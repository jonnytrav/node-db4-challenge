const express = require("express");
const server = express();

// !!! SET UP .ENV FILE LATER !!! //
const PORT = 4000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
