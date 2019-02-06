const config = require('../config');
const { getToken } = require('./tokenStore');
const inquirer = require('inquirer');
const request = require('superagent');
const getZoo = require('./zoo');

module.exports = () => {
  return request
    .get(`${config.url}/zoos`)
    .set('Authorization', `Bearer ${getToken()}`)
    .then(res => res.body)
    .then(zoos => {
      // let names = zoos.map(zoo => zoo.name);
      // let values = zoos.map(zoo => zoo._id);
      return inquirer.prompt([
        {
          type: 'list',
          name: 'zoos',
          message: 'Please pick a zoo',
          choices: zoos.map(zoo => { return { name: zoo.name, value: zoo._id };})
        }
      ]);
    })
    .then(({ zoos }) => {
      return getZoo(zoos);
    });
};
