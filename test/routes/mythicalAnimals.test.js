const request = require('supertest');
const app = require('../../lib/app');
const { getMythicalAnimal } = require('../dataHelper');


describe('mythical animal model', () => {
  it('gets a list of all animals', () => {
    return request(app)
      .get('/mythicalAnimals')
      .then(res => {
        expect(res.body).toHaveLength(14);
      });
  });

  it('gets animal by id', () => {
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
});

