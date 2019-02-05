// require('dotenv').config();
// require('../../lib/utils/connect')();
// const connect = require('../../lib/utils/connect');
// const app = require('../../lib/app');
// const User = require('../../lib/models/User');
// const request = require('supertest');
// const mongoose = require('mongoose');

// describe('User Model', () => {
//   const createUser = (username) => {
//     return User.create({
//       username, 
//       password: 'password'
//     })
//       .then(res =>  res.body);
//   };
//   beforeAll(() => {
//     connect();
//   });
//   beforeEach(done => {
//     mongoose.connection.dropDatabase(done);
//   });
//   afterAll(done => {
//     mongoose.connection.close(done);
//   });
// });
