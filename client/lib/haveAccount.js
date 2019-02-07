const inquirer = require('inquirer');
const signin = require('./signin');
const signup = require('./signup');
const select = require('./select');
const chalk = require('chalk');

const account = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'selection',
      message: chalk.bold.blue('Do you have an account?'),
      choices: [
        { name: 'Yes', value: 'signin' }, 
        { name: 'No', value: 'signup' }
      ]
    }
  ])
    .then(({ selection }) => {
      if(selection === 'signin') {
        return signin();
      }
      else if(selection === 'signup'){
        return signup();
      }
      else chalk.red('DO NOT UNDERSTAND PROMPT');
    })
    .then(select);
};

module.exports = account;
