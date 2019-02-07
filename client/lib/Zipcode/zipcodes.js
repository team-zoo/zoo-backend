const inquirer = require('inquirer');
const getZipcode = require('./zipcode');
const chalkAnimation = require('chalk-animation');


module.exports = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'zipcodes',
      message: chalkAnimation.karaoke('Please put in a zipcode')
    }
  ])
    .then(({ zipcodes }) => {
      return getZipcode(zipcodes);    
    });
};
