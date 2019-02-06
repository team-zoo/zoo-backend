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

const limitBy5 = () => ({ $limit: 5 });

//Top 5 zoos in order of animal count
animalSchema.statics.getZoosByAnimalCount = function() {
  return this.aggregate([
    groupByZooAndAddAnimals(),
    sortByDesc(),
    limitBy5()
  ]);
};

//Top 5 most prolific animal type across all zoos combined
animalSchema.statics.getProlificAnimalTypeAllZoos = function() {
  return this.aggregate([
    groupByTypeAndAddAnimals(),
    sortByDesc(),
    limitBy5()
  ]);
};

module.exports = mongoose.model('Animal', animalSchema);
