const mongoose = require('mongoose');
const schema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    userRole: String
}, {collection: 'users'});
module.exports = schema;
