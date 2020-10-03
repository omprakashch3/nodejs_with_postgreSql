const http = require("http");

// const hostName = "localhost";
const PORT = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  res.end("hello Om Gm");
});

server.listen(PORT, () => {
  console.log(`server is running on :${PORT}`);
});
