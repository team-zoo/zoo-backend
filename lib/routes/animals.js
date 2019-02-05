const { Router } = require('express');
const Animal = require('../models/Animal');

module.exports = Router()
  .get('/', (req, res, next) => {
    Animal
      .find()
      .then(animals => res.send(animals))
      .catch(next);
  });
