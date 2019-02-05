const request = require('supertest');
const app = require('../../lib/app');
const { getToken, getAnimal } = require('../dataHelper');

describe('zoo model', () => {
  it('get a list of all animals', () => {
    return request(app)
      .get('/animals')
      .set('Authorization', `Bearer ${getToken()}`)
      .then(res => {
        expect(res.body).toHaveLength(54);
      });
  });

  it('get animal by id', () => {
    return getAnimal()
      .then(animal => {
        return request(app)
          .get(`/animals/${animal._id}`);
      })
      .then(res => expect(res.body).toEqual({
        zoo: expect.any(String),
        name: expect.any(String),
        type: expect.any(String),
        status: expect.any(String),
        _id: expect.any(String)
      }));
  });
  it('posts an animal', () => {
    return request(app)
      .post('/animals')
      .set('Authorization', `Bearer ${getToken()}`)
      .send({
        zoo: 'San Diego Zoo',
        name: 'penguin',
        type: 'bird',
        status: 'alive'
      })
      .then(res => {
        expect(res.body).toEqual({
          zoo: 'San Diego Zoo',
          name: 'penguin',
          type: 'bird',
          status: 'alive',
          _id: expect.any(String),  
        });
      });
  });
});

