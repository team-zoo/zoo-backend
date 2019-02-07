const inquirer = require('inquirer');
const zoos = require('./Zoo/zoos');
const animals = require('./Animal/animals');
const visitors = require('./Visitor/visitors');
const zipcodes = require('./Zipcode/zipcodes');
const animalType = require('./Animal/animalTypes');



const select = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'selection',
      message: 'Please choose zoo, visitor, or animal',
      choices: [
        { name: 'Zoo', value: 'zoos' }, 
        { name: 'Visitor', value: 'visitors' }, 
        { name: 'Animals', value: 'animals' },
        new inquirer.Separator(),
        { name: 'Search For a Zoo', value: 'zipcodes' },
        { name: 'Search For an animal type', value: 'animalTypes' }
      ]
    }
  ])
    .then(({ selection }) => {
      if(selection === 'zoos') {
        return zoos();
      }
      else if(selection === 'visitors'){
        return visitors();
      }
      else if(selection === 'animals'){
        return animals();
      }
      else if(selection === 'zipcodes') {
        return zipcodes();
      }
      else if(selection === 'animalTypes') {
        return animalType();
      }
      else 'DO NOT UNDERSTAND PROMPT';
    })
    .then(select);
};

module.exports = select;
