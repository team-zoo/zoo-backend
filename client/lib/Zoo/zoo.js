const config = require('../../config');
const { getToken } = require('../tokenStore');
const request = require('superagent');
const img = require('terminal-image');

module.exports = id => {
  return request 
    .get(`${config.url}/zoos/${id}`)
    .set('Authorization', `Bearer ${getToken()}`)
    .type('image/jpeg')
    .then(res => res.body)
    .then(zoo => {
      return Promise.all([
        Promise.resolve(zoo),
        request.get(zoo.photoUrl)
      ]);
    })
    .then(([zoo, res]) => {
      return Promise.all([
        Promise.resolve(zoo),
        img.buffer(res.body)
      ]);
    })
    .then(([zoo, image]) => {
      console.log(image);
      console.log(`ZOO NAME: ${zoo.name}`);
      console.log(`ZOO CITY: ${zoo.city}`);
    });
};
