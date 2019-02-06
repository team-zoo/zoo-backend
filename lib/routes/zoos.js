require('dotenv').config();
const { Router } = require('express');
const Zoo = require('../models/Zoo');
const { HttpError } = require('../middleware/error');
const { ensureAuth } = require('../middleware/ensureAuth');
const { getAllRoles, roles } = require('../models/roles');
const API_KEY = process.env.API_KEY;
const request = require('superagent');

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
    const patched = patcher(req.body, ['photoUrl', 'name', 'city', 'id']);
    Zoo
      .findByIdAndUpdate(req.params.id, patched, { new: true })
      .then(updatedZoo => res.send(updatedZoo))
      .catch(next);
  })

  .get('/search/:zip', (req, res, next) => {
    request
      .get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=${req.params.zip}&type=zoo&key=${API_KEY}`)
      .then(apiRes => {
        const zoos = apiRes.body.results.map(zoo => ({
          name: zoo.name,
          address: zoo.formatted_address,
          rating: zoo.rating
        }));

        res.send(zoos);
      })
      .catch(next);
  });

