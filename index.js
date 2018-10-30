const express = require('express');
const server = express();
const PayPalController = require('./controllers/PaypalController');
const { PORT } = process.env;
const nunjucks = require('nunjucks');

server.use(express.static('./public'))

nunjucks.configure('views', {
  autoescape: true,
  express: server,
});


server.get('/home', (req, res) => {
  res.render('home.html');
});

server.post('/paypal', PayPalController.request);
server.get('/sucesso', PayPalController.sucesso);
server.get('/cancelado', PayPalController.cancelado);

server.listen(PORT, () => {
  console.log(`Servidor escutando na porta :${PORT}`);
});
