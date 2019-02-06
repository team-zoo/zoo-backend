const inquirer = require('inquirer');
const zoos = require('./zoos');
const animals = require('./animals');
const visitors = require('./visitors');
const zipcodes = require('./zipcodes');

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
        { name: 'Search For a Zoo', value: 'zipcodes' }
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
      else 'DO NOT UNDERSTAND PROMPT';
    })
    .then(select);
};

module.exports = select;
