const express = require("express");
const fortunes = require("./data/fortune.json");

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/fortunes", (req, res) => {
  res.json(fortunes);
});

app.get("/fortunes/random", (req, res) => {
  // // res.send("getting a random fortunes...");
  // const randomIndex = Math.floor(Math.random() * fortunes.length);

  // const rFortunes = fortunes[randomIndex];
  res.send(fortunes[Math.floor(Math.random() * fortunes.length)]);
});

app.get("/fortunes/:id", (req, res) => {
  // console.log(req.params);
  res.json(fortunes.find((f) => f.id == req.params.id));
});

app.listen(PORT, () => {
  console.log(`listnig on port ${PORT}`);
});
