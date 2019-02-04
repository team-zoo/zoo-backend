const { Router } = require('express');
const  Visitor = require('../../lib/models/Visitor');
// const { HttpError } = require('../../lib/middleware/error');
// const { ensureAuth } = require('../middleware/ensureAuth');

const patcher = (body, fields) => {
  return Object.keys(body)
    .reduce((acc, key) => {
      if(fields.includes(key) && body[key]) {
        acc[key] = body[key];
      }
      return acc;
    }, {});
};

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
  })
  .patch('/:id', (req, res, next) => {
    const patched = patcher(req.body, ['username', 'age']);
    Visitor
      .findByIdAndUpdate(req.params.id, patched, { new: true })
      .then(updatedVisitor => {
        res.send(updatedVisitor);
      })
      .catch(next);
  });

