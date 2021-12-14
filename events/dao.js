const model = require('./model');

const getAllEvents = () => model.find().sort({_id: -1});

const createEvent = (event) =>
    model.create(event);

const searchEventByKeywords = (keyword) =>
    model.find({$text: {$search:keyword}});

module.exports = {
    getAllEvents, createEvent, searchEventByKeywords
};