// const Chance = require('chance');
// const chance = new Chance();
// const zooData = require('./data/zooData');
// const animalData = require('./data/animalData');
// const Zoo = require('../lib/models/Zoo');
// const Visitor = require('../lib/models/Visitor');
// const Animal = require('../lib/models/Animal');
// // const User = require('../lib/models/User');

// const seedData = () => {
//   return Promise.all(
//     zooData.map(zoo => {
//       return Zoo.create(zoo);
//     })
//   )
//     .then(zoos => {
//       return Promise.all(
//         animalData(zoos).map(animal => {
//           return Animal.create(animal);
//         })
//       )
//         .then(animals => {
//           return Promise.all(
//             [...Array(100)].map(() => {
//               return Visitor.create({
//                 username: chance.pickone(users),
//                 zoo: chance.pickone(zoos)._id,
//                 age: chance.age(),
//                 favoriteAnimal: [chance.pickone(animals)._id, chance.pickone(animals)._id, chance.pickone(animals)._id, chance.pickone(animals)._id, chance.pickone(animals)._id]
//               });
//             })
//           );
//         });
//     });
// };

// module.exports = seedData;

