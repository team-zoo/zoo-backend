const bcrypt = require('bcryptjs');
const SALT_ROUNDS = 10;

const hash = str => bcrypt.hash(str, SALT_ROUNDS);

const compare = (str, hash) => bcrypt.compare(str, hash);

module.exports = {
  hash,
  compare
};
