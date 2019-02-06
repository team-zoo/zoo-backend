const config = require('../config');
const request = require('superagent');
const { getToken } = require('./tokenStore');


module.exports = zipcode => {
  return request 
    .get(`${config.url}/zoos/search/${zipcode}`)
    .set('Authorization', `Bearer ${getToken()}`)
    .then(res => console.log(res.body, 'hELLO'))
    .then(zipcode => {
      return Promise.all([
        Promise.resolve(zipcode)
      ]);
    })
    .then(([zipcode]) => {
      console.log(zipcode.name);
    });
};
