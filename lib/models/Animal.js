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
  status: {
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

// const groupByTypeAndAddAnimals = () => ({ 
//   $group: { 
//     _id: '$type', 
//     animalCount: { $sum: 1 } 
//   } 
// });

const sortByDesc = () => ({ $sort: { animalCount: -1 } });

// const projectAnimalType = () => ({
//   type: '$_id',
//   animalCount: true
// });

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
    zooName: '$zooName.name'
  }
});

//Top 5 zoos in order of animal count
animalSchema.statics.getZoosByAnimalCount = function() {
  return this.aggregate([
    groupByZooAndAddAnimals(),
    lookupZooName(),
    unwindZoo(),
    projectCountAndZoo(),
    sortByDesc()
  ]);
};

//Top 5 most prolific animal type across all zoos combined
animalSchema.statics.getProlificAnimalTypeAllZoos = function() {
  return this.aggregate([
    // groupByTypeAndAddAnimals(),
    // projectAnimalType(),
    // sortByDesc()
    [{ $group: {
      _id: '$type', animalCount: { $sum: 1 }
    } }, { $project: {
      type: '$_id',
      animalCount: true
    } }, { $sort: {
      animalCount: -1
    } }]
  ]);
};

module.exports = mongoose.model('Animal', animalSchema);
