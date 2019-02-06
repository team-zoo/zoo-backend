const config = require('../config');
const { getToken } = require('./tokenStore');
const inquirer = require('inquirer');
const request = require('superagent');
const getVisitor = require('./visitor');

module.exports = () => {
  return request
    .get(`${config.url}/visitors`)
    .set('Authorization', `Bearer ${getToken()}`)
    .then(res => res.body)
    .then(visitors => {
      return inquirer.prompt([
        {
          type: 'list',
          name: 'visitors',
          message: 'Please creep on a visitor',
          choices: visitors.map(visitor => visitor._id)
        }
      ]);
    })
    .then(({ visitors }) => {
      return getVisitor(visitors);
    });
};
