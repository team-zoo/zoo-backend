const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({ 
  username: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  zoo: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Zoo',
    required: true 
  },
  age: {
    type: Number,
    required: true
  },
  favoriteAnimal: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Animal'
    }
  ]
}, 
{
  toJSON: {
    transform: function(doc, ret) {
      delete ret.__v;
    }
  }
});

const groupByZoo = () => ({ 
  $group: { 
    _id: '$zoo', 
    avgAge: {
      $avg: '$age'
    } 
  } 
});

const groupByNull = () => ({ 
  $group: { 
    _id: null, 
    avgAge: {
      $avg: '$age'
    } 
  } 
});

const groupByZooAndAddVisitors = () => ({
  $group: {
    _id: '$zoo', 
    visitorsCount: { $sum: 1 }
  }
});

const sortByDesc = () => ({ $sort: { age: -1 } });

const limitBy5 = () => ({ $limit: 5 });

const unwindFavoriteAnimal = () => ({ $unwind: { path: '$favoriteAnimal' } });

const groupByFavoriteAnimal = () => (
  { $group: 
    {
      _id: '$favoriteAnimal',
      animalCount: {
        $sum: 1
      }
    }
  });

const sortByAnimalCount = () => (({ $sort: { animalCount: -1 } }));

const limitBy1 = () => ({ $limit: 1 });

const lookupAnimal = () => (
  { $lookup: 
    {
      from: 'animals',
      localField: '_id',
      foreignField: '_id',
      as: 'animalName'
    }
  });

const projectName = () => (
  {
    $project: {
      animalCount: true,
      animalName: '$animalName.name'
    }
  });

const unwindReturnedAnimal = () => ({ $unwind: { path: '$animalName' } });

//Top 5 average visitor age
visitorSchema.statics.getAvgAgeEachZoo = function() {
  return this.aggregate([
    groupByZoo(),
    sortByDesc(),
    limitBy5()
  ]);
};

//Average visitor age for all zoos combined
visitorSchema.statics.getAvgAgeAllZoos = function() {
  return this.aggregate([
    groupByNull(),
    sortByDesc(),
    limitBy5()
  ]);
};

//Top 5 Zoos in Order of Visitor Counts
visitorSchema.statics.getZoosByVisitorCount = function() {
  return this.aggregate([
    groupByZooAndAddVisitors(),
    sortByDesc(),
    limitBy5()
  ]);
};

//Most favorited animal among all zoos-- returns animal name and its count
visitorSchema.statics.getMostFavoritedAnimalAllZoos = function() {
  return this.aggregate([
    unwindFavoriteAnimal(),
    groupByFavoriteAnimal(),
    sortByAnimalCount(),
    limitBy1(),
    lookupAnimal(),
    unwindReturnedAnimal(),
    projectName()
  ]);
};


module.exports = mongoose.model('Visitor', visitorSchema);
