const Chance = require('chance');
const chance = new Chance();
const zooData = require('./data/zooData');
const Zoo = require('../lib/models/Zoo');
const Visitor = require('../lib/models/Visitor');
const Animal = require('../lib/models/Animal');
const animalData = require('./data/animalData');

const seedData = () => {
  return Promise.all(
    zooData.map(zoo => {
      return Zoo.create(zoo);
    })
  )
    .then(zoos => {
      return Promise.all(
        [...Array(15)].map(() => {
          return Visitor.create({
            username: chance.email(),
            zoo: chance.pickone(zoos)._id,
            age: 25,
            animals: chance.pickone(animals)._id
          });
        })
      );
    });
};

module.exports = seedData;

