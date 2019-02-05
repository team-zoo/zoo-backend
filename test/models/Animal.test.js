const Animal = require('../../lib/models/Animal');
const Zoo = require('../../lib/models/Zoo');
const mongoose = require('mongoose');

describe('animal model', () => {
  it('validates a good animal model', () => {
    const zoo = new Zoo({ photoUrl: 'photo', name: 'San Diego zoo', city: 'San Diego' });
    const animal = new Animal({ 
      zoo: zoo._id, 
      name: 'penguin', 
      type: 'bird', 
      status: 'alive' 
    });
    expect(animal.toJSON()).toEqual({ 
      zoo: zoo._id, 
      name: 'penguin', 
      type: 'bird', 
      status: 'alive',
      _id: expect.any(mongoose.Types.ObjectId)
    });
  });
});
