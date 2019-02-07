const { Router } = require('express');
const { HttpError } = require('../middleware/error');
const MythicalAnimal = require('../models/MythicalAnimal');
const { parse } = require('url');

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
  })

  .get('/search/name/:q', (req, res, next) => {
    const query = parse(req.url, true).query;
    MythicalAnimal
      .find({ name: `${query.name}` })
      .then(mythical => res.send(mythical))
      .catch(next);
  })

  .get('/search/habitat/:q', (req, res, next) => {
    const query = parse(req.url, true).query;
    MythicalAnimal
      .find({ habitat: `${query.habitat}` })
      .then(mythical => res.send(mythical))
      .catch(next);
  })

  .get('/search/animalCombination/:q', (req, res, next) => {
    const query = parse(req.url, true).query;
    MythicalAnimal
      .find({ animalCombination: `${query.animalCombination}` })
      .then(mythical => res.send(mythical))
      .catch(next);
  });
