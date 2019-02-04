require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../../lib/models/User');

describe('User model', () => {
  it('validates a good model', () => {
    User
      .create({
        role: 'owner',
        username: 'shabz',
        password: 'passit'
      })
      .then(user => expect(user).toEqual({
        username: 'shabz',
        _id: expect.any(mongoose.Types.ObjectId)
      }));
  });

  it('has a required username', () => {
    const user = new User({});
    const errors = user.validateSync().errors;

    expect(errors.username.message).toEqual('Username required');
  });

  it('stores a _tempPassword', () => {
    const user = new User({
      role: 'owner',
      username: 'shabz',
      password: 'passtotheword'
    });
    expect(user._tempPassword).toEqual('passtotheword');
  });

  it('has a passwordHash', () => {
    User.create({
      role: 'owner',
      username: 'shabz',
      password: 'passit'
    })
      .then(user =>  {
        expect(user.passwordHash).toEqual(expect.any(String));
        expect(user.password).toBeUndefined();
      });
  });

  it('can compare good passwords', () => {
    User.create({
      role: 'owner',
      username: 'shabz',
      password: 'passit'
    })
      .then(user => user.compare('passit'))
      .then(res => expect(res).toBeTruthy());
  });

  it('can compare bad passwords', () => {
    User.create({
      role: 'owner',
      username: 'shabz',
      password: 'passit'
    })
      .then(user => user.compare('dontpassit'))
      .then(res => expect(res).toBeFalsy);
  });
});
