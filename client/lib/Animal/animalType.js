/* eslint-disable no-console */
const config = require('../../config');
const request = require('superagent');
const { getToken } = require('../tokenStore');

module.exports = type => {
  return request 
    .get(`${config.url}/animals/search/query?type=${type}`)
    .set('Authorization', `Bearer ${getToken()}`)
    .then(res => res.body)
    .then(type => {
      console.log(type);
    });
};
