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
    required: true 
  },
  legs: {
    type: Number,
    required: true
  },
  colors: {
    type: Array,
    required: true
  },
  status: {
    type: String,
    required: true

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

module.exports = mongoose.model('Animal', animalSchema);
