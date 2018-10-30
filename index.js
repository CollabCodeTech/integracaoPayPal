const express = require('express');
const server = express();
<<<<<<< HEAD
const { PORT } = process.env;

server.get('/home', (req, res) => {
  res.send('Olá');
});
=======

const { HOST, PORT } = process.env;

server.post("/paypal", PayPalController.request);
>>>>>>> 78c5e8208d40ecc26afb5f8bc0579dc4f9e46f4e

server.listen(PORT, () => {
  console.log(`Servidor escutando na porta :${PORT}`);
});
