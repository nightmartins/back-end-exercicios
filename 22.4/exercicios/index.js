const express = require('express');
const bodyParser = require('body-parser');
const ping = require('./middlewares/ping');
const showAge = require('./middlewares/showAge');

const app = express();

app.use(bodyParser.json());

app.get('/ping', ping);

app.post('/hello', function (req, res) {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}!` });
});

app.post('/greetings', function (req, res) {
  const { name, age } = req.body;
  if (age < 18) return res.status(401).json({ message: "Unauthorized" });
  res.status(200).json({ message: `Hello, ${name}!` })
});

app.put('/users', showAge)

app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000');
});

