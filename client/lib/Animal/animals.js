const config = require('../../config');
const { getToken } = require('../tokenStore');
const inquirer = require('inquirer');
const request = require('superagent');
const getAnimal = require('./animal');
const chalkAnimation = require('chalk-animation');

module.exports = () => {
  return request
    .get(`${config.url}/animals`)
    .set('Authorization', `Bearer ${getToken()}`)
    .then(res => res.body)
    .then(animals => {
      return inquirer.prompt([
        {
          type: 'list',
          name: 'animals',
          message: chalkAnimation.neon('Please pick a animal'),
          choices: animals.map(animal => { return { name: animal.name, value: animal._id };})
        }
      ]);
    })
    .then(({ animals }) => {
      return getAnimal(animals);
    });
};
