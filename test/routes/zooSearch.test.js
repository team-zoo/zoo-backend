const request = require('supertest');
const app = require('../../lib/app');

describe('zoo model', () => {
  it('gets suggested zoos by zip code', () => {
    return request(app)
      .get('/zoos/search/findZoo?zip=97070')
      .then(res => expect(res.body).toEqual([{
        name: 'Oregon Zoo',
        address: '4001 Southwest Canyon Road, Portland, OR 97221, USA',
        rating: 4.5
      }]));
  });

  it('gets suggested zoos by zip and radius', () => {
    return request(app)
      .get('/zoos/search/findZoo?zip=97221&radius=10000')
      .then(res => expect(res.body).toBeDefined());
  });
});
