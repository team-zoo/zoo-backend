const request = require('supertest');
const app = require('../../lib/app');
const { getToken, getAnimal, getZoo } = require('../dataHelper');

describe('animal model', () => {
  it('get a list of all animals', () => {
    return request(app)
      .get('/animals')
      .set('Authorization', `Bearer ${getToken()}`)
      .then(res => {
        expect(res.body).toHaveLength(54);
      });
  });

  it('get a specific animal from search query', () => {
    return request(app)
      .get('/animals/search/getAnimal?name=wolf')
      .set('Authorization', `Bearer ${getToken()}`)
      .then(res => {
        expect(res.body.name).toEqual('wolf');
      });
  });

  it('get animal by id', () => {
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
            name: 'penguin',
            type: 'bird',
            status: 'alive',
            photoUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/01/16/10/emperor-penguin.jpg?w968h681'
          });
      })
      .then(res => {
        expect(res.body).toEqual({
          zoo: expect.any(String),
          name: 'penguin',
          type: 'bird',
          status: 'alive',
          photoUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/01/16/10/emperor-penguin.jpg?w968h681',
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
                name: 'parrot',
                type: 'bird',
                status: 'alive',
                photoUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/01/16/10/emperor-penguin.jpg?w968h681'
              });
          });
      })
      .then(res => {
        expect(res.body).toEqual({ 
          zoo: expect.any(Object),
          name: 'parrot',
          type: 'bird',
          status: 'alive',
          photoUrl: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/01/16/10/emperor-penguin.jpg?w968h681',
          _id: expect.any(String)  
        });
      });
  });
});

