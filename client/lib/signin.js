/* eslint-disable no-console */
const config = require('../config');
const { setToken } = require('./tokenStore');
const inquirer = require('inquirer');
const request = require('superagent');
const chalk = require('chalk');

module.exports = () => {
  console.log('SIGN IN');
  return inquirer.prompt([
    { 
      type: 'input',
      name: 'username',
      message: chalk.green('Username')
    },
    {
      type: 'password',
      name: 'password',
      message: chalk.green('Password')
    }, 
    {
      type: 'input',
      name: 'role',
      message: chalk.green('Role')
    }

  ])
    .then(({ username, password, role }) => {
      return request
        .post(`${config.url}/auth/signin`)
        .send({ username, password, role });
    })
    .then(res => {
      setToken(res.body.token);
    });
};
