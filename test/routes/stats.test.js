require('../dataHelper');
const request = require('supertest');
const app = require('../../lib/app');
const { getToken } = require('../dataHelper');

describe('zoo model', () => {
  it('gets average visitor age for all zoos', () => {
    return request(app)
      .get('/visitors/stats/average-age-all')
      .set('Authorization', `Bearer ${getToken()}`)
      .then(res => expect(res.body[0]).toEqual({
        _id: null,
        avgAge: expect.any(Number)
      }));
  });

  it('gets average visitor age for each zoo', () => {
    return request(app)
      .get('/visitors/stats/average-age-each')
      .set('Authorization', `Bearer ${getToken()}`)
      .then(res => {
        res.body.forEach(zoo => expect(zoo).toEqual({
          _id: expect.any(String),
          avgAge: expect.any(Number),
          zooCity: expect.any(String),
          zooName: expect.any(String)
        }));
      });
  });

  it('gets top 10 zoos by visitor count', () => {
    return request(app)
      .get('/visitors/stats/zoos-by-visitor-count')
      .set('Authorization', `Bearer ${getToken()}`)
      .then(res => {
        expect(res.body).toHaveLength(10);
        res.body.forEach(zoo => expect(zoo).toEqual({
          _id: expect.any(String),
          visitorCount: expect.any(Number),
          zooName: expect.any(String),
          zooCity: expect.any(String)
        }));
      });
  });

  it('gets top 10 zoos in order of animal count', () => {
    return request(app)
      .get('/animals/stats/zoos-by-animal-count')
      .set('Authorization', `Bearer ${getToken()}`)
      .then(res => {
        expect(res.body).toHaveLength(10);
        res.body.forEach(zoo => expect(zoo).toEqual({
          _id: expect.any(String),
          animalCount: expect.any(Number),
          zooName: expect.any(String),
          zooCity: expect.any(String)
        }));
      });
  });

  it('gets top 5 most prolific animal type across all zoos', () => {
    return request(app)
      .get('/animals/stats/zoos-prolific-animal-type-all')
      .set('Authorization', `Bearer ${getToken()}`)
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
      .set('Authorization', `Bearer ${getToken()}`)
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
        expect(res.body).toHaveLength(10);
        res.body.forEach(animal => expect(animal).toEqual({
          _id: expect.any(String),
          animalName: expect.any(String),
          animalCount: expect.any(Number),
          zooCity: expect.any(String),
          zooName: expect.any(String)
        }));
      });
  });

  it('get top 3 zoos with least deceased animals', () => {
    return request(app)
      .get('/animals/stats/least-dead')
      .set('Authorization', `Bearer ${getToken()}`)
      .then(res => {
        expect(res.body).toHaveLength(3);
        res.body.forEach(zoo => expect(zoo).toEqual({
          _id: { 
            zoo: expect.any(String),
            status: 'deceased'
          },
          zooName: expect.any(String)
        }));
      });
  });
});
