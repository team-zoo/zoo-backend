module.exports = (req, res, next) => {
  res.statusCode = 404;
  res.send({ error: 'Sorry, ' + req.url + ' was not found!' });
  next();
};
