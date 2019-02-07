const inquirer = require('inquirer');
const getType = require('./animalType');


module.exports = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'animalType',
      message: 'Please put in an animal type'
    }
  ])
    .then(({ animalType }) => {
      return getType(animalType);    
    });
};
