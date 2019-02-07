require('dotenv').config();
const mongoose = require('mongoose');
const connect = require('../../lib/utils/connect');
const request = require('supertest');
const app = require('../../lib/app');
const User = require('../../lib/models/User');

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
    return request(app) 
      .post('/auth/signup')
      .send({ 
        username: 'test2', 
        password: 'password', 
        role: 'owner' 
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

  it('allows user to sign in', () => {
    return createUser('meeee1')
      .then(() => {
        return request(app)
          .post('/auth/signin')
          .send({ username: 'meeee1', password: 'password' });
      })
      .then(res => {
        expect(res.body).toEqual({ 
          user: {
            _id: expect.any(String),
            username: 'meeee1',
            role: 'owner'
          },
          token: expect.any(String)
        });
      });
  });
  
  it('has verify route', () => {
    return createUser('weeee1')
      .then(() => {
        return request(app)
          .post('/auth/signin')
          .send({ username: 'weeee1', password: 'password' })
          .then(res => res.body.token);
      })
      .then(token => {
        return request(app)
          .get('/auth/verify')
          .set('Authorization', `Bearer ${token}`);                    
      })
      .then(res => {
        expect(res.body).toEqual({
          username: 'weeee1',
          _id: expect.any(String),
          role: 'owner'
        });
      }); 
  });
  it('compared different two password hashes', () => {
    return User.create({
      username: 'email@email.com', 
      password: 'password',
      role: 'owner'
    })
      .then(user => {
        return user.compare('password2');
      })
      .then(result => { 
        expect(result).toBeFalsy();
      });
  });
});

