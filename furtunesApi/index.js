const express = require("express");
const fortunes = require("./data/fortune.json");

const app = express();
const PORT = 5000;

app.get("/fortunes", (req, res) => {
  res.json(fortunes);
});

app.listen(PORT, () => {
  console.log(`listnig on port ${PORT}`);
});
