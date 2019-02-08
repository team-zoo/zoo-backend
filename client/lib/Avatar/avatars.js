const config = require('../../config');
const { getToken } = require('../tokenStore');
const inquirer = require('inquirer');
const request = require('superagent');
const getAvatar = require('./avatar');
const chalkAnimation = require('chalk-animation');

module.exports = () => {
  return request
    .get(`${config.url}/mythicalAnimals`)
    .set('Authorization', `Bearer ${getToken()}`)
    .then(res => res.body)
    .then(avatars => {
      return inquirer.prompt([
        {
          type: 'list',
          name: 'avatars',
          message: chalkAnimation.pulse('Please pick an avatar'),
          choices: avatars.map(avatar => { return { name: avatar.name, value: avatar._id };})
        }
      ]);
    })
    .then(({ avatars }) => {
      return getAvatar(avatars);
    });
};

