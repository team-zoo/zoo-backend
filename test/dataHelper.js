require('dotenv').config();
const connect = require('../lib/utils/connect');
const mongoose = require('mongoose');
const seedData = require('./seedData');
const User = require('../lib/models/User');
const Zoo = require('../lib/models/Zoo');
const Visitor = require('../lib/models/Visitor');
const Animal = require('../lib/models/Animal');
const MythicalAnimal = require('../lib/models/MythicalAnimal');
const request = require('supertest');
const app = require('../lib/app');

beforeAll(() => {
  connect();
});

beforeEach(done => {
  mongoose.connection.dropDatabase(done);
});

beforeEach(() => {
  return User.create({
    username: 'Bill0',
    role: 'owner',
    password: 'password'
  });
});

beforeEach(() => {
  return seedData({ totalUsers: 10, totalVisitors: 50, totalAnimals: 30, totalZoos: 10, totalMythicals: 14 });
});

beforeEach(() => {
  return User.create({
    username: 'Bill0',
    role: 'owner',
    password: 'password'
  });
});

let token;
beforeEach(() => {

  return User.findOne({ username: 'Bill0' })
    .then(user => {
      return request(app)
        .post('/auth/signin')
        .send({ username: user.username, password: 'password' });
    })
    .then(res => {
      token = res.body.token;
    });
});

afterAll(done => {
  mongoose.connection.close(done);
});

const prepare = model => JSON.parse(JSON.stringify(model));
const prepareAll = models => models.map(prepare);

const createGetters = Model => {
  return {
    [`get${Model.modelName}`]: (query = {}) => Model.findOne(query).then(prepare),
    [`get${Model.modelName}s`]: (query = {}) => Model.find(query).then(prepareAll),
  };
};

module.exports = {
  ...createGetters(User),
  ...createGetters(Zoo),
  ...createGetters(Visitor),
  ...createGetters(Animal),
  ...createGetters(MythicalAnimal),
  getToken: () => token
};
