require('dotenv').config();
const app = require('../../lib/app');
const request = require('supertest');
const { getToken, getVisitor, } = require('../dataHelper');

//getUser, getZoo, getAnimal Needs to include these before creating a visitor.

// const Chance = require('chance');
// const chance = new Chance();

describe('visitor app', () => {
  it('can create a visitor', () => {
    
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
