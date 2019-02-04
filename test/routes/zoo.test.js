require('dotenv').config();
require('../../lib/utils/connect')();
const request = require('supertest');
const app = require('../../lib/app');
const { getToken, getZoo } = require('../dataHelper');

describe('comment model', () => {
  it('get a list of all zoos', () => {
    return request(app)
      .get('/zoos')
      .set('Authorization', `Bearer ${getToken()}`)
      .then(res => {
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
          name: 'Oregon Zoo',
          photoUrl: 'https://d1060ja7433lis.cloudfront.net/kr8BxxN8UG/apg_1507232961.jpg',
          city: 'Sacramento',
          _id: expect.any(String)
        });
      });
  });

  it('can get a zoo by id', () => {
    return getZoo()
      .then(zoo => {
        return request(app)
          .get(`/zoos/${zoo._id}`);
      })
      .then(res => {
        expect(res.body).toEqual({ 
          name: expect.any(String),
          photoUrl: expect.any(String),
          city: expect.any(String),
          _id: expect.any(String)
        });
      });
  });

  





});
