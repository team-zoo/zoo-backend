const { Router } = require('express');
const  Visitor = require('../../lib/models/Visitor');
const { HttpError } = require('../../lib/middleware/error');
const { ensureAuth } = require('../middleware/ensureAuth');
const { roles } = require('../models/roles');

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
  .post('/', ensureAuth([roles.OWNER, roles.VISITOR]), (req, res, next) => {
    const { username, age } = req.body;
    Visitor
      .create({ username, age })
      .then(visitor => res.send(visitor))
      .catch(next);
  })

  .get('/', ensureAuth([roles.OWNER, roles.VISITOR]), (req, res, next) => {
    Visitor
      .find()
      .then(allVisitors => res.send(allVisitors))
      .catch(next);
  })

  .get('/:id', ensureAuth([roles.OWNER, roles.VISITOR]), (req, res, next) => {
    Visitor
      .findById(req.params.id)
      .then(foundVisitor => {
        if(!foundVisitor) {
          return next(new HttpError(404, 'No visitor Found with this Id'));
        }
        res.send(foundVisitor);
      })
      .catch(next);
  })
  
  .patch('/:id', ensureAuth([roles.OWNER]), (req, res, next) => {
    const patched = patcher(req.body, ['username', 'age']);
    Visitor
      .findByIdAndUpdate(req.params.id, patched, { new: true })
      .then(updatedVisitor => {
        if(!updatedVisitor) {
          return next(new HttpError(404, 'No visitor Found with this Id'));
        }
        res.send(updatedVisitor);
      })
      .catch(next);
  })

  .get('/stats/average-age-each', (req, res, next) => {
    Visitor
      .getAvgAgeEachZoo()
      .then(avg => res.send(avg))
      .catch(next);
  });

