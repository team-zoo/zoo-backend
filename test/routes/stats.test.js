require('../dataHelper');
const request = require('supertest');
const app = require('../../lib/app');

describe('zoo model', () => {
  it('gets average visitor age for all zoos', () => {
    return request(app)
      .get('/visitors/stats/average-age-all')
      .then(res => expect(res.body[0]).toEqual({
        _id: null,
        avgAge: expect.any(Number)
      }));
  });

  it('gets average visitor age for each zoo', () => {
    return request(app)
      .get('/visitors/stats/average-age-each')
      .then(res => {
        expect(res.body).toHaveLength(5);
        res.body.forEach(avg => expect(avg).toEqual({
          _id: expect.any(String),
          avgAge: expect.any(Number)
        }));
      });
  });
});
