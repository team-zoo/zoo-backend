const { Router } = require('express');
const Animal = require('../models/Animal');
const { HttpError } = require('../middleware/error');
const { ensureAuth } = require('../middleware/ensureAuth');
const { roles } = require('../models/roles');

module.exports = Router()
  .get('/', (req, res, next) => {
    Animal
      .find()
      .then(animals => res.send(animals))
      .catch(next);
  })
  .get('/:id', (req, res, next) => {
    const id = req.params.id;
    Animal
      .findById(id)
      .then(animal => {
        if(!animal) return next(new HttpError(404, 'No animal found with this id'));
        res.send(animal);
      })
      .catch(next);
  })
  .post('/', ensureAuth([roles.owner]), (req, res, next) => {
    const { name, type, status } = req.body;
    Animal
      .create({
        zoo: req.zoo._id,
        name, 
        type, 
        status
      })
      .then(post => res.send(post))
      .catch(next);
  });
