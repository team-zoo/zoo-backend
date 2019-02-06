require('../dataHelper');
const request = require('supertest');
const app = require('../../lib/app');
const { getToken } = require('../dataHelper');

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
        res.body.forEach(zoo => expect(zoo).toEqual({
          _id: expect.any(String),
          avgAge: expect.any(Number)
        }));
      });
  });

  it('gets top 5 zoos by visitor count', () => {
    return request(app)
      .get('/visitors/stats/zoos-by-visitor-count')
      .then(res => {
        expect(res.body).toHaveLength(5);
        res.body.forEach(zoo => expect(zoo).toEqual({
          _id: expect.any(String),
          visitorsCount: expect.any(Number)
        }));
      });
  });

  it('gets top 5 zoos in order of animal count', () => {
    return request(app)
      .get('/animals/stats/zoos-by-animal-count')
      .then(res => {
        expect(res.body).toHaveLength(5);
        res.body.forEach(zoo => expect(zoo).toEqual({
          _id: expect.any(String),
          animalCount: expect.any(Number),
          zooName: expect.any(String)
        }));
      });
  });

  it('gets top 5 most prolific animal type across all zoos', () => {
    return request(app)
      .get('/animals/stats/zoos-prolific-animal-type-all')
      .then(res => {
        expect(res.body).toHaveLength(5);
        res.body.forEach(animal => expect(animal).toEqual({
          _id: expect.any(String),
          animalCount: expect.any(Number),
          type: expect.any(String)
        }));
      });
  });

  it('get most favorited animal among all zoos', () => {
    return request(app)
      .get('/animals/stats/fav-animal-all')
      .then(res => expect(res.body).toEqual([{
        _id: expect.any(String),
        animalCount: expect.any(Number),
        animalName: expect.any(String)
      }]));
  });

  it('return most favorited animal from each zoo', () => {
    return request(app)
      .get('/animals/stats/fav-animal-each-zoo')
      .set('Authorization', `Bearer ${getToken()}`)
      .then(res => {
        console.log(res.body);
        expect(res.body).toHaveLength(5);
      });
  });
});
