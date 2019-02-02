require('dotenv').config();
require('../../lib/utils/connect')();
const mongoose = require('mongoose');
const User = require('../../lib/models/User');

describe('User model', () => {
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
});
