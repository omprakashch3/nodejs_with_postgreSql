const express = require("express");

const app = express();

// for POST request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", require("./routes/api"));

const PORT = process.env.PORT || 5555;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
