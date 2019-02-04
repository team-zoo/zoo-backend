const { Router } = require('express');
const  Visitor = require('../../lib/models/Visitor');
const { HttpError } = require('../../lib/middleware/error');
// const { ensureAuth } = require('../middleware/ensureAuth');

module.exports = Router() 
