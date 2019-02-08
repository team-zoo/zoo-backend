const config = require('../../config');
const request = require('superagent');
const { getToken } = require('../tokenStore');

module.exports = zipcode => {
  return request 
    .get(`${config.url}/zoos/search/findZoo?zip=${zipcode}`)
    .set('Authorization', `Bearer ${getToken()}`)
    .then(res => res.body)
    .then(zipcode => {
      console.log(zipcode);
    });
};
