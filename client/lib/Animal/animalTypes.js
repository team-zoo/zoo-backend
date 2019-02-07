const inquirer = require('inquirer');
const getType = require('./animalType');
const gradient = require('gradient-string');


module.exports = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'animalType',
      message: gradient.teen('Please put in an animal type')
    }
  ])
    .then(({ animalType }) => {
      return getType(animalType);    
    });
};
