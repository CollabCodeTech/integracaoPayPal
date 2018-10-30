require("dotenv").config();
const express = require("express");
const server = express();
const { HOST, PORT } = process.env;

server.get("/", (req, res) => {
  res.send("Olá");
});

server.listen(PORT, () => {
  console.log(`Servidor escutando em http://${HOST}:${PORT}`);
});
