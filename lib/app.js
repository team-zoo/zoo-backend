const express = require('express');
const app = express();
const { handler } = require('./middleware/error');
const notFound = require('./middleware/notFound');
const { bearerToken } = require('./middleware/ensureAuth');
const connection = require('../lib/middleware/connection');
const visitors = require('../lib/routes/visitors');
const zoos = require('../lib/routes/zoos');
const auth = require('../lib/routes/auth');
const animals = require('../lib/routes/animals');

app.use(express.json());
app.use(bearerToken);
app.use('/auth', connection, auth);
app.use('/zoos', zoos);
app.use('/visitors', visitors);
app.use('/animals', animals);

app.use(notFound);
app.use(handler);

module.exports = app;
