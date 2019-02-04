const mongoose = require('mongoose');
// const { hash, compare } = require('../utils/hash');
// const { untokenize, tokenize } = require('../utils/token'); 

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
  favoriteAnimal: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Animal'
  }]
}, {
  toJSON: {
    transform: function(doc, ret) {
      delete ret.__v;
      delete ret.passwordHash;
    }
  }
});

visitorSchema.virtual('password')
  .set(function(password) {
    this._tempPassword = password;
  });

module.exports = mongoose.model('Visitor', visitorSchema);
