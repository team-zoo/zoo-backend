const express = require('express');
const app = express();
const zoos = require('../lib/routes/zoos');
const { handler } = require('./middleware/error');
const notFound = require('./middleware/notFound');
const { bearerToken } = require('./middleware/ensureAuth');
const visitors = require('../lib/routes/visitors');
const connection = require('../lib/middleware/connection');

app.use(express.json());

app.use(bearerToken);
app.use(connection);

app.use('/zoos', zoos);
app.use('/visitors', visitors);

app.use(notFound);
app.use(handler);

module.exports = app;
