const config = require('../config');
const { getToken } = require('./tokenStore');
const request = require('superagent');

module.exports = id => {
  return request
    .get(`${config.url}/visitors${id}`)
    .set('Authorization', `Bearer ${getToken()}`)
    .then(res => res.body)
    .then(visitor => {
      return Promise.all([
        Promise.resolve(visitor)
        // request.get(visitor._id)
      ]);
    })
    .then(([visitor]) => {
      return Promise.all([
        Promise.resolve(visitor)
      ]);
    })
    .then(([visitor]) => {
      // console.log(image);
      console.log(visitor.age);
    });
};
