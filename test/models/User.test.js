require('dotenv').config();
const connect = require('../../lib/utils/connect');
const mongoose = require('mongoose');
const User = require('../../lib/models/User');

describe('User model', () => {
  beforeAll(() => connect());

  beforeEach(done => mongoose.connection.dropDatabase(done));

  afterAll(() => mongoose.connection.close());

  it('validates a good model', () => {
    User
      .create({
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
      username: 'shabz',
      password: 'passtotheword'
    });
    expect(user._tempPassword).toEqual('passtotheword');
  });

  it('has a passwordHash', () => {
    return User.create({
      username: 'shabz',
      password: 'passit'
    })
      .then(user =>  {
        expect(user.passwordHash).toEqual(expect.any(String));
        expect(user.password).toBeUndefined();
      });
  });

  // it('can compare good passwords', () => {
  //   return User.create({
  //     username: 'shabz',
  //     password: 'passit'
  //   })
  //     .then(user => user.compare('passit'))
  //     .then(res => expect(res).toBeTruthy());
  // });
});
