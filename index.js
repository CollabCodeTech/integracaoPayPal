const express = require('express');
const server = express();
const PayPalController = require('./controllers/PaypalController');
const { PORT } = process.env;
const nunjucks = require('nunjucks');
const HomeController = require("./controllers/HomeController");
const bodyParser = require("body-parser");

server.use(express.static('./public'))

server.use(bodyParser.urlencoded({ extended: true }));
nunjucks.configure('views', {
  autoescape: true,
  express: server,
});


server.get('/home', HomeController.show);
server.get("/", HomeController.show);
server.post('/paypal', PayPalController.request);
server.get('/callback', PayPalController.callback);
server.post("/confirm", PayPalController.confirm);
server.get("/cancel", PayPalController.cancel);


server.listen(PORT, () => {
  console.log(`Servidor escutando na porta :${PORT}`);
});
