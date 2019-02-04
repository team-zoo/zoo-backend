const Chance = require('chance');
const chance = new Chance();

module.exports = (zoos) => [
  {
    name: 'cheetah',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'brown bear',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'beluga whale',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'dolphin',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'giraffe',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'lion',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'otter',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'siberian tiger',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'wolf',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'polar bear',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'gazelle',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'hedgehog',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'beaver',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'python',
    type: 'reptile',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'tortoise',
    type: 'reptile',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'crocodile',
    type: 'reptile',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'gila monster',
    type: 'reptile',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'iguana',
    type: 'reptile',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'chameleon',
    type: 'reptile',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'painted turtle',
    type: 'reptile',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'king cobra',
    type: 'reptile',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'gecko',
    type: 'reptile',
    zoo: chance.pickone(zoos)._id
  },

  {
    name: 'viper',
    type: 'reptile',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'macaw',
    type: 'bird',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'great blue heron',
    type: 'bird',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'flamingo',
    type: 'bird',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'egret',
    type: 'bird',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'puffin',
    type: 'bird',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'ostrich',
    type: 'bird',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'peacock',
    type: 'bird',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'great horned owl',
    type: 'bird',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'king penguin',
    type: 'bird',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'bald eagle',
    type: 'bird',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'american bullfrog',
    type: 'amphibian',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'american toad',
    type: 'amphibian',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'newt',
    type: 'amphibian',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'salamander',
    type: 'amphibian',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'tree frog',
    type: 'amphibian',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'leopard frog',
    type: 'amphibian',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'bullfrog',
    type: 'amphibian',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'tomato frog',
    type: 'amphibian',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'giant marine toad',
    type: 'amphibian',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'moss frog',
    type: 'amphibian',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'sturgeon',
    type: 'fish'
  },
  {
    name: 'rainbow trout',
    type: 'fish',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'coho salmon',
    type: 'fish',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'chinook salmon',
    type: 'fish',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'bull trout',
    type: 'fish',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'african lungfish',
    type: 'fish',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'pirahna',
    type: 'fish',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'swordfish',
    type: 'fish',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'bluehead wrasse',
    type: 'fish',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'seahorse',
    type: 'fish',
    zoo: chance.pickone(zoos)._id
  },
  {
    name: 'stringray',
    type: 'fish',
    zoo: chance.pickone(zoos)._id
  }
];
