const inquirer = require('inquirer');
const getType = require('./animalType');


module.exports = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'animalType',
      message: 'Please put in an animal type (reptile, mammal, fish, bird or amphibian) '
    }
  ])
    .then(({ animalType }) => {
      return getType(animalType);    
    });
};
