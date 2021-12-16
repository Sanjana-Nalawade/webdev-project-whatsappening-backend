const mongoose = require('mongoose');
const schema = require('./schema');
const model = mongoose.model('PostsModel', schema);
module.exports = model;