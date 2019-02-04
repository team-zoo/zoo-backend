const mongoose = require('mongoose');
const { hash, compare } = require('../utils/hash');
const { tokenize, untokenize } = require('../../lib/utils/token');

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    required: [true, 'Role required']
  },
  username: {
    type: String,
    required: [true, 'Username required']
  },
  passwordHash: {
    type: String,
  }
},
{
  toJSON: {
    transform: function(doc, ret) {
      delete ret.__v;
      delete ret.passwordHash;
    }
  }
});

userSchema.virtual('password').set(function(password) {
  this._tempPassword = password;
});

userSchema.pre('save', function(next) {
  hash(this._tempPassword)
    .then(hashedPassword => {
      this.passwordHash = hashedPassword;
      next();
    });
});

userSchema.methods.authToken = function() {
  return tokenize(this.toJSON());
};

userSchema.methods.compare = function(password) {
  return compare(password, this.passwordHash);
};

userSchema.statics.findByToken = function(token) {
  return Promise.resolve(untokenize(token));
};

module.exports = mongoose.model('User', userSchema);
