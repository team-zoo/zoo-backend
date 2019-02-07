const config = require('../../config');
const { getToken } = require('../tokenStore');
const inquirer = require('inquirer');
const request = require('superagent');
const getAvatar = require('./avatar');


module.exports = () => {
  return request
    .get(`${config.url}/mythicalAnimals`)
    .set('Authorization', `Bearer ${getToken()}`)
    .then(res => res.body)
    .then(avatars => {
      return inquirer.prompt([
        {
          type: 'list',
          name: 'visitors',
          message: 'Explore Avatar Animals',
          choices: avatars.map(avatar => avatar._id)
        }
      ]);
    })
    .then(({ avatars }) => {
      return getAvatar(avatars);
    });
};

