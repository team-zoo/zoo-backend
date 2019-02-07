const request = require('supertest');
const app = require('../../lib/app');
const { getToken, getAnimal, getZoo } = require('../dataHelper');

describe('animal model', () => {
  it('gets a list of all animals', () => {
    return request(app)
      .get('/animals')
      .set('Authorization', `Bearer ${getToken()}`)
      .then(res => {
        expect(res.body).toHaveLength(58);
      });
  });

  it('gets animals using query model test 1', () => {
    return request(app)
      .get('/animals/search/query?type=mammal&legs=4&colors=brown')
      .set('Authorization', `Bearer ${getToken()}`)
      .then(res => {
        expect(res.body.length).toEqual(11);
      });
  });

  it('gets animals using query model test 2', () => {
    return request(app)
      .get('/animals/search/query?type=reptile&legs=4')
      .set('Authorization', `Bearer ${getToken()}`)
      .then(res => {
        expect(res.body.length).toEqual(7);
      });
  });

  it('gets animal by id', () => {
    return getAnimal()
      .then(animal => {
        return request(app)
          .get(`/animals/${animal._id}`);
      })
      .then(res => {
        expect(res.body).toEqual({
          zoo: expect.any(Object),
          name: expect.any(String),
          type: expect.any(String),
          legs: expect.any(Number),
          colors: expect.any(Array),
          status: expect.any(String),
          photoUrl: expect.any(String),
          _id: expect.any(String)
        });
      });
  });

  it('posts an animal', () => {
    return getZoo() 
      .then(zoo => {
        return request(app)
          .post('/animals')
          .set('Authorization', `Bearer ${getToken()}`)
          .send({
            zoo: zoo._id,
            name: 'snow leopard',
            type: 'mammal',
            legs: 4,
            colors: ['white', 'black'],
            status: 'alive',
            photoUrl: 'https://vignette.wikia.nocookie.net/onepiecefanfiction/images/f/fa/Snow-leopard.jpg/revision/latest?cb=20150421142449'
          });
      })
      .then(res => {
        expect(res.body).toEqual({
          zoo: expect.any(String),
          name: 'snow leopard',
          type: 'mammal',
          status: 'alive',
          legs: 4,
          colors: ['white', 'black'],
          photoUrl: 'https://vignette.wikia.nocookie.net/onepiecefanfiction/images/f/fa/Snow-leopard.jpg/revision/latest?cb=20150421142449',
          _id: expect.any(String),  
        });
      });
  });

  it('can update an animal by id', () => {
    return getZoo()
      .then(zoo => {
        return getAnimal()
          .then(animal => {
            return request(app)
              .patch(`/animals/${animal._id}`)
              .set('Authorization', `Bearer ${getToken()}`)
              .send({
                zoo: zoo._id,
                name: animal.name,
                type: animal.type,
                status: 'dead',
                legs: animal.legs,
                colors: animal.colors,
                photoUrl: animal.photoUrl
              });
          });
      })
      .then(res => {
        expect(res.body).toEqual({ 
          zoo: expect.any(Object),
          name: expect.any(String),
          type: expect.any(String),
          status: 'dead',
          legs: expect.any(Number),
          colors: expect.any(Array),
          photoUrl: expect.any(String),
          _id: expect.any(String)  
        });
      });
  });
});

