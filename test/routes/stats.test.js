require('../dataHelper');
const request = require('supertest');
const app = require('../../lib/app');

describe('zoo model', () => {
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
