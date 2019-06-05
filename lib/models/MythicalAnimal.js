const mongoose = require('mongoose');

const mythicalAnimalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  habitat: {
    type: String,
    required: true
  },
  photoUrl: {
    type: String,
    required: true
  },
  animalCombination: {
    type: [String],
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

module.exports = mongoose.model('MythicalAnimal', mythicalAnimalSchema);
