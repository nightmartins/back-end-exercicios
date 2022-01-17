const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('express-rescue');
const ping = require('./middlewares/ping');
const showAge = require('./middlewares/showAge');
const simpsonsUtils = require('./fs-utils');

const app = express();

app.use(bodyParser.json());

app.get('/ping', ping);

app.get('/simpsons', rescue(async (req, res) => {
  const simpsons = await simpsonsUtils.getSimpsons();

  res.status(200).json(simpsons);
}));

app.get(
  '/simpsons/:id',
  rescue(async (req, res) => {
    const simpsons = await simpsonsUtils.getSimpsons();

    const simpson = simpsons.find(({ id }) => id === req.params.id);

    if (!simpson) {
      return res.status(404).json({ message: 'simpson not found' });
    }

    return res.status(202).json(simpson);
  })
);

app.post(
  '/simpsons',
  rescue(async (req, res) => {
    const { id, name } = req.body;

    const simpsons = await simpsonsUtils.getSimpsons();

    if (simpsons.map(({ id }) => id).includes(id)) {
      return res.status(409).json({ message: 'id already exists' });
    }

    simpsons.push({ id, name });

    await simpsonsUtils.setSimpsons(simpsons);

    res.status(204).end();
  })
);

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

