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

module.exports = mongoose.model('Animal', animalSchema);
