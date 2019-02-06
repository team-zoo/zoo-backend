const inquirer = require('inquirer');
const signin = require('./signin');
const signup = require('./signup');
const select = require('./select');

const account = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'selection',
      message: 'Do you have an account?',
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
      else 'DO NOT UNDERSTAND PROMPT';
    })
    .then(select);
};

module.exports = account;
