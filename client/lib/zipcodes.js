const config = require('../config');
const inquirer = require('inquirer');
const request = require('superagent');
const getZipcode = require('./zipcode');
const { getToken } = require('./tokenStore');


module.exports = () => {
  return request
  .get(`${config.url}/zoos/search`)
  .set('Authorization', `Bearer ${getToken()}`)
  .then(res => console.log('HELLO', res.body));
  // .then(()=> {
  //     return inquirer.prompt([
  //       {
  //         type: 'input',
  //         name: 'zipcodes',
  //         message: 'Please type in a zipcode'
  //       }
  //     ]);
  //   })
  //   .then(({ zipcodes }) => {
  //     return getZipcode(zipcodes);
  //   });
};
