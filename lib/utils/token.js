require('dotenv').config();
const jwt = require('jsonwebtoken');

const EXPIRE_IN = '48h';

const tokenize = payload => {
  return jwt.sign({ payload },
    process.env.AUTH_SECRET,
    { expiresIn: EXPIRE_IN });
};

const untokenize = token => {
  const body = jwt.verify(token,
    process.env.AUTH_SECRET);

  return body.payload;
};

module.exports = {
  tokenize,
  untokenize
};
