const express = require('express');
const server = express();
const PayPalController = require('./controllers/PaypalController');
const { PORT } = process.env;

server.get('/home', (req, res) => {
  res.send('Olá');
});

server.post('/paypal', PayPalController.request);

server.listen(PORT, () => {
  console.log(`Servidor escutando na porta :${PORT}`);
});
