require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const nunjucks = require("nunjucks");

const HomeController = require("./controllers/HomeController");
const PayPalController = require("./controllers/PayPalController");

const { HOST, PORT } = process.env;

nunjucks.configure("views", {
  autoescape: true,
  express: server
});

server.use(express.static("public"));
server.use(bodyParser.urlencoded({ extended: true }));

server.get("/", HomeController.show);
server.post("/paypal", PayPalController.request);
server.get("/callback", PayPalController.callback);
server.post("/confirm", PayPalController.confirm);
server.get("/cancel", PayPalController.cancel);

server.listen(PORT, () => {
  console.log(`Servidor escutando em http://${HOST}:${PORT}`);
});
