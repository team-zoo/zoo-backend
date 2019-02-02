const User = require('../../lib/models/User');
const { HttpError } = require('../middleware/error');

const bearerToken = (req, res, next) => {
  const authHeader = req.get('Authorization') || '';
  const token = authHeader.replace(/Bearer\s/i, '');

  req.token = token;
  next();
};

const ensureAuth = (req, res, next) => {
  return User.findByToken(req.token)
    .then(user => {
      if(user) {
        req.user = user;
        next();
      }
      else {
        next(new HttpError(401, 'No user with that token'));
      }
    }).catch(next);
};

module.exports = { 
  bearerToken, 
  ensureAuth 
};
