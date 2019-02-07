const { Router } = require('express');
const { HttpError } = require('../middleware/error');
const MythicalAnimal = require('../models/MythicalAnimal');

module.exports = Router()
  .get('/', (req, res, next) => {
    MythicalAnimal
      .find()
      .then(mythicals => res.send(mythicals))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    const id = req.params.id;
    MythicalAnimal
      .findById(id)
      .select('-__v')
      .then(mythical => {
        if(!mythical) return next(new HttpError(404, 'No mythical found with this id'));
        res.send(mythical);
      })
      .catch(next);
  });
