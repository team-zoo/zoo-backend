const config = require('../../config');
const { getToken } = require('../tokenStore');
const inquirer = require('inquirer');
const request = require('superagent');
const getZoo = require('./zoo');
const chalkAnimation = require('chalk-animation');

module.exports = () => {
  return request
    .get(`${config.url}/zoos`)
    .set('Authorization', `Bearer ${getToken()}`)
    .then(res => res.body)
    .then(zoos => {
      return inquirer.prompt([
        {
          type: 'list',
          name: 'zoos',
          message: chalkAnimation.rainbow('Please pick a zoo'),
          choices: zoos.map(zoo => { return { name: zoo.name, value: zoo._id };})
        }
      ]);
    })
    .then(({ zoos }) => {
      return getZoo(zoos);
    });
};
