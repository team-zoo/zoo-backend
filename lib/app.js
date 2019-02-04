const express = require('express');
const app = express();
const zoos = require('../lib/routes/zoos');
const { handler } = require('./middleware/error');
const notFound = require('./middleware/notFound');
const { bearerToken } = require('./middleware/ensureUser');

app.use(express.json());

app.use('/zoos', zoos);
app.use(bearerToken);
app.use(notFound);
app.use(handler);

module.exports = app;
