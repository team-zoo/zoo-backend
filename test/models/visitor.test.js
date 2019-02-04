require('dotenv').config();
const connect = require('../../lib/utils/connect');
const app = require('../../lib/app');
const mongoose = require('mongoose');
const request = require('supertest');
const Visitor = require('../../lib/models/Visitor');
const { Types } = require('mongoose');

const createVisitor = (username) => {
  return request(app)
    .post('/visitors')
    .send({
      username: username,
      age: 12,
      password: 'password'
    })
    .then(res => res.body);
};

describe('visitor app', () => {
  beforeAll(() => {
    connect();
  });
  beforeEach(done => {
    mongoose.connection.dropDatabase(done);
  });
  afterAll(done => {
    mongoose.connection.close(done);
  });
  it('tests the visitor model', () => {
    const visitor = new Visitor({ username: 'Bob' });
    expect(visitor.toJSON()).toEqual({ username: 'Bob', _id: expect.any(Types.ObjectId) });
  });
});
