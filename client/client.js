const signin = require('./lib/signin');
const selection = require('./lib/select');

console.log(selection);

signin().then(selection);
