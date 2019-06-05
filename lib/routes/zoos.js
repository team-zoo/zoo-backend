const { Router } = require('express');
const { HttpError } = require('../middleware/error');
const { ensureAuth } = require('../middleware/ensureAuth');
const { getAllRoles, roles } = require('../models/roles');
const { findZoosByZip } = require('../services/places');
const Zoo = require('../models/Zoo');

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
        if(!foundZoo) return next(new HttpError(404, 'No zoo Found with this Id'));
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

  // this cleans up this code a bit and makes it more modular it.
  // more important this is really just a thin wrapper around the
  // google places API. It would be better to use an API that allows
  // you to search your data better. So, given a zipcode and radius
  // you would return a list of zoos from your database within
  // that radius. Check out https://www.zipcodeapi.com.
  // What you have done here does make it so you could search
  // Google places while creating new zoos. You can then use
  // the information that Google Places gives you to fill in
  // your zoo data.
  .get('/search/:zip', (req, res, next) => {
    const { radius } = req.query;
    findZoosByZip(req.params.zip, radius)
      .then(zoos => res.send(zoos))
      .catch(next);
  });
