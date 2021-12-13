const mongoose = require('mongoose');
const schema = require('./schema');
const model = mongoose.model('EventsModel', schema);
module.exports = model;