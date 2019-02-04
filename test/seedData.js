const Chance = require('chance');
const chance = new Chance();
const zooData = require('./data/zooData');
const Zoo = require('../lib/models/Zoo');
const Visitor = require('../lib/models/Visitor');
const Animal = require('../lib/models/Animal');
const animalData = require('./data/animalData');

console.log(animalData);

// const DEFAULT_TOTAL_USERS = 10;
// const DEFAULT_TOTAL_ZOOS = 5;
// const DEFAULT_TOTAL_VISITORS = 20;
// const DEFAULT_TOTAL_ANIMALS = 30;

const seedData = () => {
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
            [...Array(100)].map(() => {
              return Visitor.create({
                username: chance.email(),
                zoo: chance.pickone(zoos)._id,
                age: chance.age(),
                favoriteAnimal: [chance.pickone(animals)._id, chance.pickone(animals)._id, chance.pickone(animals)._id, chance.pickone(animals)._id, chance.pickone(animals)._id]
              });
            })
          );
        });
    });
};

module.exports = seedData;

