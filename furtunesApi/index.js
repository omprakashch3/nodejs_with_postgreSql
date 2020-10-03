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

const writeFortunes = (json) => {
  fs.writeFile("./data/fortune.json", JSON.stringify(json), (err) =>
    console.log(err)
  );
};

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
  const newFortunes = fortunes.concat(fortune);
  // fs.writeFile("./data/fortune.json", JSON.stringify(newFortunes), (err) =>
  //   console.log(err)
  // );
  writeFortunes(newFortunes);

  res.json(newFortunes);
});

app.put("/fortunes/:id", (req, res) => {
  const { id } = req.params;
  // const { message, lucky_number, spirit_animal } = req.body;
  const oldFortune = fortunes.find((f) => f.id == id);
  // oldFortune.message = message; // if (message) oldFortune.message = message; to update partially
  // oldFortune.lucky_number = lucky_number;
  // oldFortune.spirit_animal = spirit_animal;

  ["message", "lucky_number", "spirit_animal"].forEach((key) => {
    if (req.body[key]) oldFortune[key] = req.body[key];
  });

  // fs.writeFile("./data/fortune.json", JSON.stringify(fortunes), (err) =>
  //   console.log(err)
  // );
  writeFortunes(fortunes);
  res.json(fortunes);
});

app.delete("/fortunes/:id", (req, res) => {
  const { id } = req.params;
  const newFortunes = fortunes.filter((f) => f.id != id);
  writeFortunes(newFortunes);
  res.json(newFortunes);
});

app.listen(PORT, () => {
  console.log(`listnig on port ${PORT}`);
});
