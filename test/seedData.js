const Chance = require('chance');
const chance = new Chance();
const zooData = require('./data/zooData');
const animalData = require('./data/animalData');
const Zoo = require('../lib/models/Zoo');
const Visitor = require('../lib/models/Visitor');
const Animal = require('../lib/models/Animal');
const User = require('../lib/models/User');

const DEFAULT_TOTAL_ZOOS = 10;
const DEFAULT_TOTAL_VISITORS = 50;
const DEFAULT_TOTAL_ANIMALS = 100;
const DEFAULT_TOTAL_USERS = 100;

/*eslint-disable no-unused-vars*/
module.exports = ({
  totalUsers = DEFAULT_TOTAL_USERS, 
  totalVisitors = DEFAULT_TOTAL_VISITORS, 
  totalAnimals = DEFAULT_TOTAL_ANIMALS, 
  totalZoos = DEFAULT_TOTAL_ZOOS
}) => {
  return Promise.all(
    [...Array(totalUsers)].map(() => {
      return User.create({
        username: chance.email(),
        role: chance.pickone(['owner', 'visitor']),
        password: 'password'
      });
    })
  )
    .then(users => {
      return Promise.all(
        zooData.map(zoo => {
          return Zoo.create(zoo);
        })
      )
        .then(zoos => {
          return Promise.all(
            animalData(zoos).map(animal => {
              return Animal.create(animal);
            })
          )
            .then(animals => {
              return Promise.all(
                [...Array(totalVisitors)].map(() => {
                  return Visitor.create({
                    username: chance.pickone(users)._id,
                    zoo: chance.pickone(zoos)._id,
                    age: chance.age(),
                    favoriteAnimal: [chance.pickone(animals)._id, chance.pickone(animals)._id, chance.pickone(animals)._id, chance.pickone(animals)._id, chance.pickone(animals)._id]
                  });
                })
              );
            });
        });
    });
};


module.exports = seedData;

