require('dotenv').config();
const mongoose = require('mongoose');
const Visitor = require('../../lib/models/Visitor');
const User = require('../../lib/models/User');
const Zoo = require('../../lib/models/Zoo');

describe('User model', () => {
  it('tests the visitor model', () => {
    const user = new User({ 
      username: 'TOM', 
      password: 'password' 
    });
    const zoo = new Zoo({ 
      photoUrl: 'photo', 
      name: 'San Diego zoo', 
      city: 'San Diego' 
    });
    const visitor = new Visitor({ 
      username: user._id, 
      zoo: zoo._id, 
      age: 15 
    });
    
    expect(visitor.toJSON()).toEqual({ 
      username: user._id, 
      zoo: zoo._id, 
      age: 15, 
      _id: expect.any(mongoose.Types.ObjectId), 
      favoriteAnimal: [] 
    });
  });
});

