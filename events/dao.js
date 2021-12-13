const model = require('./model');

const getAllEvents = () => model.find().sort({postTime: -1});

const createEvent = (event) =>
    model.create(event);

const searchEventByKeywords = (keyword) =>
    model.find({$text: {$search:keyword}});

module.exports = {
    getAllEvents, createEvent, searchEventByKeywords
};