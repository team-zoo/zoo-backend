const mongoose = require('mongoose');
const { hash, compare } = require('../utils/hash'); 
const { untokenize, tokenize } = require('../utils/token'); 

const visitorSchema = new mongoose.Schema({ 
  username: {
    type: String,
    required: [true, 'username required'],
  },
  zoo: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required: true 
  },
  age: Number,
  passwordHash: String, 
  favoriteAnimal: {
    type: mongoose.Types.ObjectId,
    refer: 'Animal'
  },
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

visitorSchema.pre('save', function(next) {
  hash(this._tempPassword)
    .then(hashedPassword => {
      this.passwordHash = hashedPassword;
      next();
    });
});

visitorSchema.methods.compare = function(password) {
  return compare(password, this.passwordHash);
};

visitorSchema.methods.authToken = function() {
  return tokenize(this.toJSON());
};

visitorSchema.statics.findByToken = function(token) {
  return Promise.resolve(untokenize(token));
};

module.exports = mongoose.model('Visitor', visitorSchema);
