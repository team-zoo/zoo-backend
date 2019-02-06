const config = require('../config');
const request = require('superagent');
const { getToken } = require('./tokenStore');


module.exports = zipcode => {
  console.log('ZIPCODE');
  return request 
    .get(`${config.url}/zoos/search/${zipcode}`)
    .set('Authorization', `Bearer ${getToken()}`)
    .then(res => res.body)
    .then(zipcode => {
      return Promise.all([
        Promise.resolve(zipcode)
      ]);
    })
    .then(([zipcode]) => {
      console.log(zipcode.address);
      console.log(zipcode.name);
    });
};
