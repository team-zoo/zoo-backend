const { Router } = require('express');
const User = require('../models/User');
const { HttpError } = require('../middleware/error');
const { ensureAuth } = require('../middleware/ensureAuth');
const { roles } = require('../models/roles');

const auth = Router()
  .post('/signup', (req, res, next) => {
    const { username, password, role } = req.body;
    User.create({ username, password, role })
      .then(user => res.send({ user, token: user.authToken() }))
      .catch(next);
  })

  .post('/signin', (req, res, next) => {
    const { username, password } = req.body;
    User.findOne({ username })
      .then(user => {
        if(!user) return next(new HttpError(401, 'Bad email or password'));
        return Promise.all([
          Promise.resolve(user),
          user.compare(password)
        ]);
      })
      .then(([user, passwordCorrect]) => {
        passwordCorrect ? res.send({ user, token: user.authToken() }) : next(new HttpError(401, 'Bad email or password'));
      })
      .catch(next);
  })
  
  .get('/verify', ensureAuth([roles.VISITOR, roles.OWNER]), (req, res) => res.send(req.user));

module.exports = auth;
