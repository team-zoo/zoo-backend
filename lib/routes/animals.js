const { Router } = require('express');
const { HttpError } = require('../middleware/error');
const { ensureAuth } = require('../middleware/ensureAuth');
const { roles } = require('../models/roles');
const Animal = require('../models/Animal');
const Visitor = require('../models/Visitor');
const getAnimalQuery = require('../utils/animal-query.js');
const { parse } = require('url');

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
      .populate('zoo', { city: false, photoUrl: false, __v: false })
      .then(animals => res.send(animals))
      .catch(next);
  })

  .get('/search/:q', (req, res, next) => {
    const query = parse(req.url, true).query;
    const animalQuery = getAnimalQuery(query);
    Animal  
      .find(animalQuery)
      .lean()
      .then(animals => res.send(animals))
      .catch(next);
  })

  .get('/search/multi/:q', (req, res, next) => {
    const query = parse(req.url, true).query;
    Animal
      .find({ colors: `${query.color}`, type: `${query.type}` })
      .then(animals => {
        res.send(animals);
      })
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    const id = req.params.id;
    Animal
      .findById(id)
      .populate('zoo', { city: false, photoUrl: false, __v: false })      
      .select('-__v')
      .then(animal => {
        if(!animal) return next(new HttpError(404, 'No animal found with this id'));
        res.send(animal);
      })
      .catch(next);
  })

  .post('/', ensureAuth([roles.OWNER]), (req, res, next) => {
    const { name, type, status, zoo, legs, colors, photoUrl } = req.body;
    Animal
      .create({
        zoo,
        name, 
        type, 
        legs,
        colors,
        status,
        photoUrl
      })
      .then(post => res.send(post))
      .catch(next);
  })
  
  .patch('/:id', ensureAuth([roles.OWNER]), (req, res, next) => {
    const patched = patcher(req.body, ['zoo', 'name', 'type', 'status', 'photoUrl']);
    Animal
      .findByIdAndUpdate(req.params.id, patched, { new: true })
      .populate('zoo', { city: false, photoUrl: false, __v: false })      
      .select('-__v')   
      .then(updatedAnimal => res.send(updatedAnimal))
      .catch(next);
  })

  .get('/stats/zoos-by-animal-count', ensureAuth([roles.OWNER]), (req, res, next) => {
    Animal
      .getZoosByAnimalCount()
      .then(animal => res.send(animal))
      .catch(next);
  })

  .get('/stats/zoos-prolific-animal-type-all', ensureAuth([roles.OWNER]), (req, res, next) => {
    Animal
      .getProlificAnimalTypeAllZoos()
      .then(zoos => res.send(zoos))
      .catch(next);
  })

  .get('/stats/fav-animal-all', ensureAuth([roles.OWNER]), (req, res, next) => {
    Visitor
      .getMostFavoritedAnimalAllZoos()
      .then(animals => res.send(animals))
      .catch(next);
  })

  .get('/stats/fav-animal-each-zoo', ensureAuth([roles.OWNER]), (req, res, next) => {
    Visitor
      .getMostFavoritedAnimalEachZoo()
      .then(givenZoos => res.send(givenZoos))
      .catch(next);
  });
