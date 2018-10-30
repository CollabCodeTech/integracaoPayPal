require("dotenv").config();
const express = require("express");
const server = express();

const { HOST, PORT } = process.env;

server.get("/paypal", PayPalController.request);

server.listen(PORT, () => {
  console.log(`Servidor escutando em http://${HOST}:${PORT}`);
});
