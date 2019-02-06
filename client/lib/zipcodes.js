// const config = require('../config');
const inquirer = require('inquirer');
// const request = require('superagent');
const getZipcode = require('./zipcode');


module.exports = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'zipcodes',
      message: 'Please put in a zipcode'
    }
  ])
    .then(({ zipcodes }) => {
      return getZipcode(zipcodes);    
    });
};
