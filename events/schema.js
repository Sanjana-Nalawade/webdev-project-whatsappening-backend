const mongoose = require('mongoose');
const schema = mongoose.Schema({
    postTime: {type: Date, default: new Date()},
    userId: String,
    eventName: String,
    organiserName: String,
    timeOfEvent: String,
    dateOfEvent: Date,
    location: String,
    shortDescription: String,
    longDescription: String,
    image: String,
    likes: {type: Number, default: 0},
    likedBy: [String],
    comments: [String]
}, {collection: 'events'});
module.exports = schema;