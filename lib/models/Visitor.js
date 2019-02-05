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

//Average visitor age for each zoo
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

module.exports = mongoose.model('Visitor', visitorSchema);
