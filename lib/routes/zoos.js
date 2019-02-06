const { Router } = require('express');
const Zoo = require('../models/Zoo');
const { HttpError } = require('../middleware/error');
const { ensureAuth } = require('../middleware/ensureAuth');
const { getAllRoles, roles } = require('../models/roles');

const patcher = (body, fields) => {
  return Object.keys(body).reduce((acc, key) => {
    if(fields.includes(key) && body[key]) {
      acc[key] = body[key];
    }
    return acc;
  }, {});
};

module.exports = Router()
  .get('/', ensureAuth(getAllRoles()), (req, res, next) => {
    Zoo
      .find()
      .then(listOfZoos => res.send(listOfZoos))
      .catch(next);
  })

  .get('/:id', ensureAuth(getAllRoles()), (req, res, next) => {
    const { id } = req.params;
    Zoo
      .findById(id)
      .then(foundZoo => {
        if(!foundZoo) {
          return next(new HttpError(404, 'No zoo Found with this Id'));
        }
        res.send(foundZoo);
      })
      .catch(next);
  })

  .patch('/:id', ensureAuth([roles.OWNER]), (req, res, next) => {
    const patched = patcher(req.body, ['photoUrl', 'name', 'city']);
    Zoo
      .findByIdAndUpdate(req.params.id, patched, { new: true })
      .then(updatedZoo => res.send(updatedZoo))
      .catch(next);
  })

  .get('/stats/fav-animal-given/:id', ensureAuth([roles.OWNER]), (req, res, next) => {
    const { id } = req.body;
    Zoo
    .findById(id)
    .then(zoo => {
      Visitor.
    })
  })



