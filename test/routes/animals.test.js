const request = require('supertest');
const app = require('../../lib/app');
const { getToken } = require('../dataHelper');

describe('zoo model', () => {
  it('get a list of all animals', () => {
    return request(app)
      .get('/animals')
      .set('Authorization', `Bearer ${getToken()}`)
      .then(res => {
        expect(res.body).toHaveLength(54);
      });
  });
});
