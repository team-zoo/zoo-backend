const mongoose = require('mongoose');

const mythicalAnimalSchema = new mongoose.Schema({
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

module.exports = mongoose.model('MythicalAnimal', mythicalAnimalSchema);
