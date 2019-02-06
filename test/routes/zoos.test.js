const request = require('supertest');
const app = require('../../lib/app');
const { getToken, getZoo } = require('../dataHelper');

describe('zoo model', () => {
  it('get a list of all zoos', () => {
    return request(app)
      .get('/zoos')
      .set('Authorization', `Bearer ${getToken()}`)
      .then(res => {
        expect(res.body).toHaveLength(5);
      });
  });

  it('return most favorited animal from each zoo', () => {
    return request(app)
      .get('/zoos/stats/fav-animal-each-zoo')
      .set('Authorization', `Bearer ${getToken()}`)
      .then(res => {
        console.log(res.body);
        expect(res.body).toHaveLength(5);
      });
  });

  it('can patch a zoo', () => {
    return getZoo()
      .then(zoo => {
        return request(app)
          .patch(`/zoos/${zoo._id}`)
          .set('Authorization', `Bearer ${getToken()}`)
          .send({ city: 'Sacramento' });
      })
      .then(res => {
        expect(res.body).toEqual({ 
          name: expect.any(String),
          photoUrl: expect.any(String),
          city: 'Sacramento',
          _id: expect.any(String),
          id: expect.any(Number)
        });
      });
  });

  it('can get a zoo by id', () => {
    return getZoo({ name: 'Oregon Zoo' })
      .then(zoo => {
        console.log('ZOO', zoo);
        return request(app)
          .get(`/zoos/${zoo._id}`)
          .set('Authorization', `Bearer ${getToken()}`);
      })
      .then(res => {
        expect(res.body).toEqual({ 
          name: 'Oregon Zoo',
          photoUrl: expect.any(String),
          city: expect.any(String),
          _id: expect.any(String),
          id: expect.any(Number)
        });
      });
  });
});
