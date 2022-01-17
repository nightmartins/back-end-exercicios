function ping(req, res, next) {
  res.json({ message: 'pong' });
  next();
}
module.exports = ping;
