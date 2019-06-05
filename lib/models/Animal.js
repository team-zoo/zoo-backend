const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  zoo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Zoo'
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    // Use enums so we ensure that only specific types are used
    enum: ['mammal', 'reptile', 'bird', 'fish', 'amphibian']
  },
  legs: {
    type: Number,
    required: true
  },
  colors: {
    // You can specify an array of strings with this notation
    type: [String],
    required: true
  },
  status: {
    type: String,
    required: true,
    // status is also an enum
    enum: ['alive', 'deceased']
  },
  photoUrl: {
    type: String,
    required: true
  }
},
{
  toJSON: {
    transform: function(doc, ret) {
      delete ret.__v;
    }
  }
});

const groupByZooAndAddAnimals = () => ({
  $group: {
    _id: '$zoo',
    animalCount: { $sum: 1 }
  }
});

const groupByTypeAndAddAnimals = () => ({
  $group: {
    _id: '$type',
    animalCount: { $sum: 1 }
  }
});

const sortByDesc = () => ({ $sort: { animalCount: -1 } });

const projectAnimalType = () => ({
  $project: {
    type: '$_id',
    animalCount: true
  }
});

const lookupZooName = () => ({
  $lookup: {
    from: 'zoos',
    localField: '_id',
    foreignField: '_id',
    as: 'zooName'
  }
});

const unwindZoo = () => ({
  $unwind: {
    path: '$zooName'
  }
});

const projectCountAndZoo = () => ({
  $project: {
    animalCount: true,
    zooName: '$zooName.name',
    zooCity: '$zooName.city'
  }
});

const matchDeceasedAnimals = () => ({ $match: { status: 'deceased' } });

const groupByZooAndStatus = () => ({
  $group: {
    _id: { zoo: '$zoo', status: '$status' },
    animalCount: { $sum: 1 }
  }
});

const sortByAscending = () => ({ $sort: { animalCount: 1 } });

const limitBy3 = () => ({ $limit: 3 });

const lookupByZoo = () => ({
  $lookup: {
    from: 'zoos',
    localField: '_id.zoo',
    foreignField: '_id',
    as: 'zooName'
  }
});

const projectZooName = () => ({
  $project: {
    zooName: '$zooName.name',
    deceasedCount: '$animalCount'
  }
});

animalSchema.statics.getZoosByAnimalCount = function() {
  return this.aggregate([
    groupByZooAndAddAnimals(),
    lookupZooName(),
    unwindZoo(),
    projectCountAndZoo(),
    sortByDesc()
  ]);
};

animalSchema.statics.getProlificAnimalTypeAllZoos = function() {
  return this.aggregate([
    groupByTypeAndAddAnimals(),
    projectAnimalType(),
    sortByDesc()
  ]);
};

animalSchema.statics.leastDead = function() {
  return this.aggregate([
    matchDeceasedAnimals(),
    groupByZooAndStatus(),
    sortByAscending(),
    limitBy3(),
    lookupByZoo(),
    projectZooName(),
    unwindZoo()
  ]);
};

module.exports = mongoose.model('Animal', animalSchema);
