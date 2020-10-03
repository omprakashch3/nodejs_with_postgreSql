const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

const fortunes = require("./data/fortune.json");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

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

app.post("/fortunes", (req, res) => {
  // console.log(req.params);
  const { message, lucky_number, spirit_animal } = req.body;
  const fortune_ids = fortunes.map((f) => f.id);
  const fortune = {
    id: (fortune_ids.length > 0 ? Math.max(...fortune_ids) : 0) + 1,
    message,
    lucky_number,
    spirit_animal,
  };
  const newFurtunes = fortunes.concat(fortune);
  fs.writeFile("./data/fortune.json", JSON.stringify(newFurtunes), (err) =>
    console.log(err)
  );

  res.json(newFurtunes);
});

app.listen(PORT, () => {
  console.log(`listnig on port ${PORT}`);
});
