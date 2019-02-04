require('../dataHelper');
const Animal = require('../../lib/models/Animal');
const { getZoo } = require('../dataHelper');

describe('animal model', () => {
  it('validates a good animal model', () => {
    return getZoo()
      .then(createdZoo => {
        const animal = {
          zoo: createdZoo._id,
          name: 'tiger',
          type: 'mammal'
        };
        const newAnimal = new Animal(animal);
        const jsonAnimal = newAnimal.toJSON();
        
        expect(jsonAnimal).toEqual({
          zoo: expect.any(Object),
          name: 'tiger',
          type: 'mammal',
          _id: expect.any(Object)
        });
      });
  });
});
