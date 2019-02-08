const config = require('../../config');
const { getToken } = require('../tokenStore');
const request = require('superagent');
const chalk = require('chalk');

module.exports = id => {
  return request 
    .get(`${config.url}/visitors/${id}`)
    .set('Authorization', `Bearer ${getToken()}`)
    .then(res => res.body)
    .then(visitor => {
      return Promise.all([
        Promise.resolve(visitor)
      ]);
    })
    .then(([visitor]) => {
      console.log(chalk.green(`USERNAME: ${visitor.username.username}`));
      console.log(chalk.green(`FAVORITE ANIMALS: ${visitor.favoriteAnimal.map(animal => animal.name).join(' | ')}`));
    });
};
