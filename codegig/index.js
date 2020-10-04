const express = require("express");
const expHbs = require("express-handlebars");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./config/database");
const app = express();

const PORT = process.env.PORT || 5000;

// test db
db.authenticate()
  .then(() => console.log("database connected .."))
  .catch((err) => console.log("Error:" + err));

app.get("/", (req, res) => {
  res.end("hello om");
});

app.listen(PORT, () => {
  console.log(`listining on port ${PORT}`);
});
