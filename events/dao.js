const model = require('./model');

const getAllEvents = () => model.find().sort({_id: -1});

const createEvent = (event) =>
    model.create(event);

const searchEventByKeywords = (keyword) =>
    model.find({$text: {$search:keyword}});

const likeEvent = (uid,eid) =>
    model.updateOne({_id : eid},{$addToSet:{"likedBy" : uid}, $inc: { "likes": 1 }});

const dislikeEvent = (uid,eid) =>
    model.updateOne({_id : eid},{$pull:{"likedBy" : uid}, $inc: { "likes": -1 }});

module.exports = {
    getAllEvents, createEvent, searchEventByKeywords, likeEvent, dislikeEvent
};