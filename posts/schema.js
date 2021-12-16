const mongoose = require('mongoose');
const schema = mongoose.Schema({
    postTime: {type: Date, default: new Date()},
    userId: String,
    eventId: String,
    shortDescription: String,
    firstName: String,
    lastName: String,
    profileImage: String,
    image: String
}, {collection: 'posts'});
module.exports = schema;