const knex = require("knex");
const DBaccess = require("./knexfile.js").development;

module.exports = knex(DBaccess);
