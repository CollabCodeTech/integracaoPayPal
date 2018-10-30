const express = require('express');
const server = express();
const { PORT } = process.env;

server.get('/', (req, res) => {
  res.send('Olá');
});

server.listen(PORT, () => {
  console.log(`Servidor escutando na porta :${PORT}`);
});
