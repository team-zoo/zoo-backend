const Chance = require('chance');
const chance = new Chance();
const zooData = require('./data/zooData');
const Zoo = require('../libs/models/Zoo');


const seedData = () => {
  return Promise.all(
    zooData.map(zoo => {
      return Zoo.create(zoo);
    })
  );
};

module.exports = seedData;
