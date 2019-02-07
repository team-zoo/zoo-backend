const Chance = require('chance');
const chance = new Chance();

module.exports = (zoos) => [
  {
    name: 'cheetah',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://cdn.britannica.com/s:300x300/01/152301-120-9ABF227D.jpg'
  },
  {
    name: 'brown bear',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://beartrust.org/wp-content/uploads/2016/08/Bear-Den-photo.jpg'
  },
  {
    name: 'beluga whale',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://i.pinimg.com/236x/58/0c/d9/580cd9bbb76ee46897bb6b99b86b5ad0--dugong-beluga.jpg'
  },
  {
    name: 'dolphin',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://assets3.thrillist.com/v1/image/2781802/size/tmg-article_default_mobile.jpg'
  },
  {
    name: 'giraffe',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://cdn.britannica.com/s:400x400/55/75855-004-7CB8C9F0.jpg'
  },
  {
    name: 'lion',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg'
  },
  {
    name: 'otter',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg'
  },
  {
    name: 'siberian tiger',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://images3.alphacoders.com/237/thumb-350-237719.jpg'
  },
  {
    name: 'wolf',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://thetorngats.com/wp-content/uploads/2016/04/Wolf_Square.jpg'
  },
  {
    name: 'polar bear',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://secure.i.telegraph.co.uk/multimedia/archive/01964/BBX8JM_1964794c.jpg'
  },
  {
    name: 'gazelle',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/2009-thom-gazelle.jpg/220px-2009-thom-gazelle.jpg'
  },
  {
    name: 'hedgehog',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://vetmed.illinois.edu/wp-content/uploads/2017/12/pc-keller-hedgehog.jpg'
  },
  {
    name: 'beaver',
    type: 'mammal',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://i.pinimg.com/originals/ba/c5/ac/bac5accca8d640bfc57e14b8558d075d.jpg'
  },
  {
    name: 'python',
    type: 'reptile',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://news.nationalgeographic.com/content/dam/news/2018/06/18/reticulated-python-attack/01-reticulated-python-nationalgeographic_2649258.ngsversion.1529343005200.adapt.1900.1.jpg'
  },
  {
    name: 'tortoise',
    type: 'reptile',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://images-na.ssl-images-amazon.com/images/I/913efLFAXIL._SL1500_.jpg'
  },
  {
    name: 'crocodile',
    type: 'reptile',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Bazoule_sacred_crocodiles_MS_6709cropped.JPG'
  },
  {
    name: 'gila monster',
    type: 'reptile',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'http://gallery.kingsnake.com/data/115447outsidegilas_013-med.jpg'
  },
  {
    name: 'iguana',
    type: 'reptile',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Portrait_of_an_Iguana.jpg'
  },
  {
    name: 'chameleon',
    type: 'reptile',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Reptiles/A-G/chameleon-sleepy.adapt.945.1.jpg'
  },
  {
    name: 'painted turtle',
    type: 'reptile',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://www.earthrangers.com/public/content/wildwire/bigstock-Midland-Painted-Turtle-Basking-35339966.jpg'
  },
  {
    name: 'king cobra',
    type: 'reptile',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://i.ytimg.com/vi/Rn1Aqa2eG3A/maxresdefault.jpg'
  },
  {
    name: 'gecko',
    type: 'reptile',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Gecko.jpg'
  },

  {
    name: 'viper',
    type: 'reptile',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Bamboo_pit_viper_-_head_profile.jpg'
  },
  {
    name: 'macaw',
    type: 'bird',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://lafeber.com/pet-birds/wp-content/uploads/2018/06/Blue-and-Gold-Macaw-300x300.jpg'

  },
  {
    name: 'great blue heron',
    type: 'bird',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://d1ia71hq4oe7pn.cloudfront.net/photo/70689641-480px.jpg'
  },
  {
    name: 'flamingo',
    type: 'bird',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Birds/A-G/flamingo-standing.ngsversion.1396530994611.jpg'
  },
  {
    name: 'egret',
    type: 'bird',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Ardea_modesta.jpg/220px-Ardea_modesta.jpg'
  },
  {
    name: 'puffin',
    type: 'bird',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://d1ia71hq4oe7pn.cloudfront.net/og/75224141-1200px.jpg'
  },
  {
    name: 'ostrich',
    type: 'bird',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://kids.nationalgeographic.com/content/dam/kids/photos/animals/Birds/H-P/ostrich-running.ngsversion.1412640507670.jpg'
  },
  {
    name: 'peacock',
    type: 'bird',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://st2.depositphotos.com/1791514/11405/i/950/depositphotos_114055636-stock-photo-peacock-peafowl-beautiful-spread-of.jpg'
  },
  {
    name: 'great horned owl',
    type: 'bird',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://d1ia71hq4oe7pn.cloudfront.net/photo/63741611-480px.jpg'
  },
  {
    name: 'king penguin',
    type: 'bird',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://secure.i.telegraph.co.uk/multimedia/archive/02137/love_penguin_2137240i.jpg'
  },
  {
    name: 'bald eagle',
    type: 'bird',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Bald_Eagle_Portrait.jpg'
  },
  {
    name: 'american bullfrog',
    type: 'amphibian',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/North-American-bullfrog1.jpg'
  },
  {
    name: 'american toad',
    type: 'amphibian',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'http://herpsofnc.org/wp-content/uploads/2016/11/14123314300_9808285854_b.jpg'
  },
  {
    name: 'newt',
    type: 'amphibian',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://nationalzoo.si.edu/sites/default/files/animals/emperornewt-003.jpg'
  },
  {
    name: 'salamander',
    type: 'amphibian',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://opimedia.azureedge.net/-/media/images/men/editorial/articles/magazine-articles/2007/02-01/a-wealth-of-salamanders/spotted-salamander-jpg.jpg'
  },
  {
    name: 'tree frog',
    type: 'amphibian',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://c1.staticflickr.com/9/8820/27964054663_38a074335e_b.jpg'
  },
  {
    name: 'leopard frog',
    type: 'amphibian',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://greenandcleanearth.files.wordpress.com/2009/06/n-leopard-frog.jpg'
  },
  {
    name: 'bullfrog',
    type: 'amphibian',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://www.sciencedaily.com/images/2018/05/180507084821_1_540x360.jpg'
  },
  {
    name: 'tomato frog',
    type: 'amphibian',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'http://www.frogpets.com/wp-content/uploads/2018/05/tomato-frog.jpg'
  },
  {
    name: 'giant marine toad',
    type: 'amphibian',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://www.backwaterreptiles.com/images/toads/giant-marine-toad-for-sale.jpg'
  },
  {
    name: 'moss frog',
    type: 'amphibian',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://i.pinimg.com/originals/d3/3f/68/d33f6853f266807a8836e678778c39fc.jpg'
  },
  {
    name: 'sturgeon',
    type: 'fish',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://seahistory.org/wp-content/uploads/Sturgeon.jpg'
  },
  {
    name: 'rainbow trout',
    type: 'fish',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/6/61/Colorful_male_rainbow_trout.jpg'
  },
  {
    name: 'coho salmon',
    type: 'fish',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://cdn2.webdamdb.com/1280_1FGHYgBlOmmk.jpg?1507320214'
  },
  {
    name: 'chinook salmon',
    type: 'fish',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c8/Coho_Spawning_on_the_Salmon_River_%2816335492972%29.jpg'
  },
  {
    name: 'bull trout',
    type: 'fish',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://www.fws.gov/oregonfwo/images/secondary_banner/bull_trout_banner.jpg'
  },
  {
    name: 'african lungfish',
    type: 'fish',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'http://www.tropical-fish-keeping.com/wp-content/uploads/2015/10/Gilled-African-lungfish-Protopterus-amphibius.jpg'
  },
  {
    name: 'pirahna',
    type: 'fish',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Pirhana06.jpg/1200px-Pirhana06.jpg'
  },
  {
    name: 'swordfish',
    type: 'fish',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'http://ichef.bbci.co.uk/wwfeatures/wm/live/624_351/images/live/p0/4d/4g/p04d4gct.jpg'
  },
  {
    name: 'bluehead wrasse',
    type: 'fish',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://rollingharbour.files.wordpress.com/2017/02/bluehead_wrasse_thallasoma_bifasciatum_oregonstate-edu-pinterest.jpg'
  },
  {
    name: 'seahorse',
    type: 'fish',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://www.shalomadventure.com/images/cache/7909cf33bee0bc9bde4af813a9b9dcce_w180_h180_cp.jpg'
  },
  {
    name: 'stringray',
    type: 'fish',
    zoo: chance.pickone(zoos)._id,
    status: chance.pickone(['alive', 'deceased', 'alive', 'alive', 'alive']),
    photoUrl: 'https://c.ndtvimg.com/2018-11/g23mgtg_stingray-pixabay_625x300_18_November_18.jpg'
  }
];
