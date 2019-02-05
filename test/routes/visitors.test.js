require('dotenv').config();
const app = require('../../lib/app');
const request = require('supertest');
const { getToken, getVisitor, getZoo, getUser, getAnimal } = require('../dataHelper');

describe('visitor app', () => {
  it('can create a visitor', () => {
    return Promise.all([
      getZoo(),
      getAnimal(),
      getUser()
    ])
      .then(([zoo, animal, user]) => {
        return request(app)
          .post('/visitors')
          .set('Authorization', `Bearer ${getToken()}`)
          .send({
            username: user._id,
            age: 5,
            zoo: zoo._id,
            favoriteAnimal: animal._id
          })
          .then(res => {
            expect(res.body).toEqual({
              username: expect.any(String),
              age: 5,
              zoo: expect.any(String),
              favoriteAnimal: expect.any(Array),
              _id: expect.any(String)
            });
          });
      });
  });

  it('gets a list of all visitors', () => {
    return request(app)
      .get('/visitors')
      .set('Authorization', `Bearer ${getToken()}`)
      .then(res => {
        expect(res.body).toHaveLength(50);
      });
  });

  it('can get a visitor by id', () => {
    return getVisitor()
      .then(visitor => {
        return request(app)
          .get(`/visitors/${visitor._id}`)
          .set('Authorization', `Bearer ${getToken()}`);
      })
      .then(res => {
        expect(res.body).toEqual({ 
          username: expect.any(String),
          zoo: expect.any(String),
          age: expect.any(Number),
          favoriteAnimal: expect.any(Array),
          _id: expect.any(String)
        });
      });
  });

  it('can patch a visitor', () => {
    return getVisitor()
      .then(visitor => {
        return request(app)
          .patch(`/visitors/${visitor._id}`)
          .set('Authorization', `Bearer ${getToken()}`)
          .send({ age: 30 });
      })
      .then(res => {
        expect(res.body).toEqual({ 
          username: expect.any(String),
          zoo: expect.any(String),
          age: 30,
          favoriteAnimal: expect.any(Array),
          _id: expect.any(String)
        });
      });
  });
});
