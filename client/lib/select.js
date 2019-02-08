const inquirer = require('inquirer');
const zoos = require('./Zoo/zoos');
const animals = require('./Animal/animals');
const visitors = require('./Visitor/visitors');
const zipcodes = require('./Zipcode/zipcodes');
const animalType = require('./Animal/animalTypes');
const avatarTypes = require('./Avatar/avatars');
const gradient = require('gradient-string');

const select = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'selection',
      message: gradient.instagram('Please choose zoo, visitor, animal, or mythical animals'),
      choices: [
        { name: 'Zoo', value: 'zoos' }, 
        { name: 'Visitor', value: 'visitors' }, 
        { name: 'Animals', value: 'animals' },
        { name: 'Mythical Animals', value: 'avatars' },
        new inquirer.Separator(),
        { name: 'Search For a Zoo', value: 'zipcodes' },
        { name: 'Search For animals by type', value: 'animalTypes' }
      ]
    }
  ])
    .then(({ selection }) => {
      if(selection === 'zoos') {
        return zoos();
      }
      else if(selection === 'visitors') {
        return visitors();
      }
      else if(selection === 'animals') {
        return animals();
      }
      else if(selection === 'zipcodes') {
        return zipcodes();
      }
      else if(selection === 'animalTypes') {
        return animalType();
      }
      else if(selection === 'avatars') {
        return avatarTypes();
      }
      else 'DO NOT UNDERSTAND PROMPT';
    })
    .then(select);
};

module.exports = select;
