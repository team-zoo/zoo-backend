const Zoo = require('../../lib/models/Zoo');

describe('zoo model', () => {
  it('validates a good zoo model', () => {
    const zoo = {
      photoUrl: 'Great Zoo',
      name: 'Brooklyn Zoo',
      city: 'Brooklyn',
      id: 6
    };
    const newZoo = new Zoo(zoo);
    const jsonZoo = newZoo.toJSON();
    
    expect(jsonZoo).toEqual({
      photoUrl: 'Great Zoo',
      name: 'Brooklyn Zoo',
      city: 'Brooklyn',
      _id: expect.any(Object),
      id: 6
    });
  });
});
