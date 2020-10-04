const Sequelize = require("sequelize");

//data base connection
// Option 1: Passing parameters separately
const db = new Sequelize("codegig", "postgres", "omprakash", {
  host: "localhost",
  dialect: "postgres",

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = db;
