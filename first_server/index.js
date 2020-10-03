const http = require("http");

// const hostName = "localhost";
const PORT = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  const { url } = req;
  console.log(url);
  if (url === "/translations") {
    const translations = { 1: "one", 2: "two", 3: "three" };

    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(translations));
    res.end();

    // res.end("Translations");
  }

  res.end("hello Om Gm");
});

server.listen(PORT, () => {
  console.log(`server is running on :${PORT}`);
});
