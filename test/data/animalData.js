const Chance = require('chance');
const chance = new Chance();

module.exports = (zoos) => [
  {
    name: 'cheetah',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'brown bear',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'beluga whale',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'dolphin',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'giraffe',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'lion',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'otter',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'siberian tiger',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'wolf',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'polar bear',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'gazelle',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'hedgehog',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'beaver',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'python',
    type: 'reptile',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'tortoise',
    type: 'reptile',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'crocodile',
    type: 'reptile',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'gila monster',
    type: 'reptile',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'iguana',
    type: 'reptile',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'chameleon',
    type: 'reptile',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'painted turtle',
    type: 'reptile',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'king cobra',
    type: 'reptile',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'gecko',
    type: 'reptile',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },

  {
    name: 'viper',
    type: 'reptile',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'macaw',
    type: 'bird',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'great blue heron',
    type: 'bird',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'flamingo',
    type: 'bird',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'egret',
    type: 'bird',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'puffin',
    type: 'bird',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'ostrich',
    type: 'bird',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'peacock',
    type: 'bird',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'great horned owl',
    type: 'bird',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'king penguin',
    type: 'bird',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'bald eagle',
    type: 'bird',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'american bullfrog',
    type: 'amphibian',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'american toad',
    type: 'amphibian',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'newt',
    type: 'amphibian',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'salamander',
    type: 'amphibian',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'tree frog',
    type: 'amphibian',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'leopard frog',
    type: 'amphibian',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'bullfrog',
    type: 'amphibian',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'tomato frog',
    type: 'amphibian',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'giant marine toad',
    type: 'amphibian',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'moss frog',
    type: 'amphibian',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'sturgeon',
    type: 'fish',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'rainbow trout',
    type: 'fish',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'coho salmon',
    type: 'fish',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'chinook salmon',
    type: 'fish',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'bull trout',
    type: 'fish',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'african lungfish',
    type: 'fish',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'pirahna',
    type: 'fish',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'swordfish',
    type: 'fish',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'bluehead wrasse',
    type: 'fish',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'seahorse',
    type: 'fish',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  },
  {
    name: 'stringray',
    type: 'fish',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive'])
  }
];
