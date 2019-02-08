const config = require('../../config');
const { getToken } = require('../tokenStore');
const request = require('superagent');
const img = require('terminal-image');

module.exports = id => {
  return request 
    .get(`${config.url}/animals/${id}`)
    .set('Authorization', `Bearer ${getToken()}`)
    .type('image/jpeg')
    .then(res => res.body)
    .then(animal => {
      return Promise.all([
        Promise.resolve(animal),
        request.get(animal.photoUrl)
      ]);
    })
    .then(([animal, res]) => {
      return Promise.all([
        Promise.resolve(animal),
        img.buffer(res.body)
      ]);
    })
    .then(([animal, image]) => {
      console.log(image);
      console.log(`ANIMAL NAME: ${animal.name}`);
      console.log(`ANIMAL STATUS: ${animal.status}`);
      console.log(`ANIMAL COLOR: ${animal.colors}`);
    });
};
