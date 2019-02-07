const config = require('../config');
const { setToken } = require('./tokenStore');
const inquirer = require('inquirer');
const request = require('superagent');

module.exports = () => {
  console.log('SIGN IN');
  return inquirer.prompt([
    { 
      type: 'input',
      name: 'username',
      message: 'Username'
    },
    {
      type: 'password',
      name: 'password',
      message: 'Password'
    }, 
    {
      type: 'input',
      name: 'role',
      message: 'Role'
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
