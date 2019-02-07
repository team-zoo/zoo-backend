const request = require('supertest');
const app = require('../../lib/app');
const { getMythicalAnimal } = require('../dataHelper');

describe('mythical animal model', () => {
  it('gets a list of all mythical animals', () => {
    return request(app)
      .get('/mythicalAnimals')
      .then(res => {
        expect(res.body).toHaveLength(14);
      });
  });

  it('gets mythical animal by id', () => {
    return getMythicalAnimal()
      .then(animal => {
        return request(app)
          .get(`/mythicalAnimals/${animal._id}`)
          .then(res => {
            expect(res.body).toEqual({
              name: expect.any(String), 
              habitat: expect.any(String),
              animalCombination: expect.any(Array), 
              photoUrl: expect.any(String),
              _id: expect.any(String)
            });
          });
      });
  });

  it('gets a specific mythical animal from animal search query', () => {
    return request(app)
      .get('/mythicalAnimals/search/query?name=Sky%20Bison')
      .then(res => expect(res.body[0].name).toEqual('Sky Bison'));
  });

  it('gets a list of mythical animals that contain the given animal in their animal combination', () => {
    return request(app)
      .get('/mythicalAnimals/search/query?animalCombination=House%20Cat')
      .then(res => expect(res.body[0].animalCombination).toContain('House Cat'));
  });

  it('gets  a list of mythical animals that live in a given habitat', () => {
    return request(app)
      .get('/mythicalAnimals/search/query?habitat=Fire%20Nation')
      .then(res => expect(res.body[0].habitat).toContain('Fire Nation'));
  });
});

