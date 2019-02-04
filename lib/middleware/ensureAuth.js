const User = require('../models/User');
const { HttpError } = require('./error');

const bearerToken = (req, res, next) => {
  const authHeader = req.get('Authorization') || '';
  const token = authHeader.replace(/Bearer\s/i, '');

  req.token = token;
  next();
};

const ensureAuth = roles => (req, res, next) => {
  return User.findByToken(req.token)
    .then(user => {
      if(user && roles.includes(user.role)) {
        req.user = user;
        next();
      }
      else if(!user){
        next(new HttpError(401, 'No user with that token'));
      }
      else {
        next(new HttpError(403, 'Access denied'));
      }
    })
    .catch(next);
};

module.exports = { 
  bearerToken, 
  ensureAuth 
};
