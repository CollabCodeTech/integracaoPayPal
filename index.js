require("dotenv").config();
const express = require("express");
const server = express();

const PayPalController = require("./controllers/PayPalController");

const { HOST, PORT } = process.env;

server.post("/paypal", PayPalController.request);
server.get("/callback", PayPalController.callback);
server.get("/cancel", PayPalController.cancel);

server.listen(PORT, () => {
  console.log(`Servidor escutando em http://${HOST}:${PORT}`);
});
