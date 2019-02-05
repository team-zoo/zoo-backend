const { Router } = require('express');
const Animal = require('../models/Animal');
const { HttpError } = require('../middleware/error');
const { ensureAuth } = require('../middleware/ensureAuth');
const { roles } = require('../models/roles');

const patcher = (body, fields) => {
  return Object.keys(body).reduce((acc, key) => {
    if(fields.includes(key) && body[key]) {
      acc[key] = body[key];
    }
    return acc;
  }, {});
};

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

  .post('/', ensureAuth([roles.OWNER]), (req, res, next) => {
    const { name, type, status, zoo } = req.body;
    Animal
      .create({
        zoo,
        name, 
        type, 
        status
      })
      .then(post => res.send(post))
      .catch(next);
  })
  
  .patch('/:id', ensureAuth([roles.OWNER]), (req, res, next) => {
    const patched = patcher(req.body, ['zoo', 'name', 'type', 'status']);
    Animal
      .findByIdAndUpdate(req.params.id, patched, { new: true })
      .then(updatedAnimal => res.send(updatedAnimal))
      .catch(next);
  });
