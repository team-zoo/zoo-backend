const inquirer = require('inquirer');
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
