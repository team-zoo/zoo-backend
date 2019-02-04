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
    const visitor = new Visitor({ username: 'Leslie' });
    expect(visitor.toJSON()).toEqual({ username: 'Leslie', _id: expect.any(Types.ObjectId) });
  });
  it('can create a visitor', () => {  
    return request(app)
      .post('/visitors')
      .send({ username: 'Jerry', age: 12 })
      .then(res => {
        expect(res.body).toEqual({
          username: 'Jerry',
          _id: expect.any(String),
          age: 12
        });
      });
  });
  it('get all visitors', () => {
    return Promise.all(['Ron', 'April', 'Anne'].map(createVisitor))
      .then(() => {
        return request(app)
          .get('/visitors');
      })
      .then(res => {
        expect(res.body).toHaveLength(3);
      });
  });
  it('can get a visitor by Id', () => {
    return createVisitor('Tom')
      .then(visitor => {
        return request(app)
          .get(`/visitors/${visitor._id}`)
          .then(res => {
            expect(res.body).toEqual({
              username: 'Tom',
              _id: expect.any(String),
              age: 12
            });
          });
      });

  });
  it('updates a visitor by id', () => {
    return createVisitor('Jerry')
      .then(visitor => {
        const id = visitor._id;
        const updatedVisitor = ({ username: 'Jam', age: 30, _id: expect.any(String) });
        return request(app)
          .patch(`/visitors/${id}`)
          .send(updatedVisitor)
          .then(res => {
            expect(res.body).toEqual({ username: 'Jam', age: 30, _id: expect.any(String) });
          });
      });
  });
});
