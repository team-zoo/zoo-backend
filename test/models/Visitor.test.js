require('dotenv').config();
const mongoose = require('mongoose');
const Visitor = require('../../lib/models/Visitor');

describe('User model', () => {
  it('tests the visitor model', () => {
    const visitor = new Visitor({ username: 'Leslie' });
    expect(visitor.toJSON()).toEqual({ username: 'Leslie', _id: expect.any(mongoose.Types.ObjectId) });
  });
});

