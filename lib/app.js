const express = require('express');
const app = express();
const connection = require('../lib/middleware/connection');

const { handler } = require('./middleware/error');
const notFound = require('./middleware/notFound');
const { bearerToken } = require('./middleware/ensureAuth');

const auth = require('../lib/routes/auth');
const zoos = require('../lib/routes/zoos');
const visitors = require('../lib/routes/visitors');
const animals = require('../lib/routes/animals');
const mythicalAnimals = require('../lib/routes/mythicalAnimals');

app.use(require('morgan')('dev'));

app.use(express.json());
app.use(bearerToken);
app.use('/auth', connection, auth);
app.use('/zoos', zoos);
app.use('/visitors', visitors);
app.use('/animals', animals);
app.use('/mythicalAnimals', mythicalAnimals);

app.use(notFound);
app.use(handler);

module.exports = app;
