const mongoose = require('mongoose');

const ZooSchema = new mongoose.Schema({
  photoUrl: { type: String, required: true },
  name: { type: String, required: true },
  city: { type: String, required: true }
});

const Zoo = mongoose.model('Zoo', ZooSchema);

module.exports = Zoo;
