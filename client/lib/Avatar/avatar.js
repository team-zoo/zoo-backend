const config = require('../../config');
const { getToken } = require('../tokenStore');
const request = require('superagent');
const img = require('terminal-image');

module.exports = id => {
  // console.log('helo', id);
  return request
    .get(`${config.url}/mythicalAnimals/${id}`)
    .set('Authorization', `Bearer ${getToken()}`)
    .type('image/jpeg')
    .then(res => res.body)
    .then(avatar => {
      return Promise.all([
        Promise.resolve(avatar),
        request.get(avatar.photoUrl)
      ]);
    })
    .then(([avatar, res]) => {
      return Promise.all([
        Promise.resolve(avatar),
        img.buffer(res.body)
      ]);
    })
    .then(([avatar, image]) => {
      console.log(image);
      console.log(`name: ${avatar.name}`);
      console.log(`combinations: ${avatar.animalCombination}`);
      console.log(`habitat: ${avatar.habitat}`);
    });
};
