const config = require('../../config');
const { getToken } = require('../tokenStore');
const request = require('superagent');
const img = require('terminal-image');
const gifTerm = require('gif-term');




module.exports = id => {
  // console.log('helo', id);
  return request
    .get(`${config.url}/mythicalAnimals/${id}`)
    .set('Authorization', `Bearer ${getToken()}`)
    .type('gif')
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
      console.log(gifTerm('last airbender', { clip: true, width: '50%' }));
      console.log(image);
      console.log(`name: ${avatar.name}`);
      console.log(`combinations: ${avatar.animalCombination}`);
      console.log(`habitat: ${avatar.habitat}`);
    });
};
