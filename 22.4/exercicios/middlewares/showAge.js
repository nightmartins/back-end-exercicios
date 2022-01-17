function showAge(req, res, next) {
  const { name, age } = req.query;
  res.json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
  next();
}
module.exports = showAge;
