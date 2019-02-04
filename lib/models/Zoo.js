const mongoose = require('mongoose');

const ZooSchema = new mongoose.Schema({
  photoUrl: { 
    type: String, 
    required: true 
  },
  name: {
    type: String, 
    required: true 
  },
  city: { 
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

module.exports = mongoose.model('Zoo', ZooSchema);
