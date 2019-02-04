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
  })
  .get('/', (req, res, next) => {
    Visitor
      .find()
      .then(allVisitors => res.send(allVisitors))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    Visitor
      .findById(req.params.id)
      .then(foundVisitor => res.send(foundVisitor))
      .catch(next);
  });

