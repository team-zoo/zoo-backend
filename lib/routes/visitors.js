const { Router } = require('express');
const  Visitor = require('../../lib/models/Visitor');
const { HttpError } = require('../../lib/middleware/error');
// const { ensureAuth } = require('../middleware/ensureAuth');

module.exports = Router() 
  .post('/', (req, res, next) => {
    const { username, age } = req.body;
    Visitor
      .create({ username, age })
      .then(visitor => res.send(visitor))
      .catch(next);
  });
