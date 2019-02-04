require('dotenv').config();
require('../../lib/utils/connect')();
const connect = require('../../lib/utils/connect');
const app = require('../../lib/app');
const User = require('../../lib/models/User');
const request = require('supertest');
const mongoose = require('mongoose');

describe('User Model', () => {
  const createUser = (username) => {
    return User.create({
      username, 
      password: 'password',
      role: 'owner'
    })
      .then(res =>  res.body);
  };
  beforeAll(() => {
    connect();
  });
  beforeEach(done => {
    mongoose.connection.dropDatabase(done);
  });
  afterAll(done => {
    mongoose.connection.close(done);
  });
  it('allows a user to sign up', () => {
    return createUser('test1')
      .then(() => {
        return request(app) 
          .post('/auth/signup')
          .send({ username: 'test2', password: 'password', role: 'owner' });
      })
      .then(res => {
        expect(res.body).toEqual({
          user: {
            _id: expect.any(String),
            username: 'test2',
            role: 'owner'
          },
          token: expect.any(String)
        });
      });
  });

});
