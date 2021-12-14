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




const getTodayEvents = () => {
    let start = new Date();
    start.setHours(0,0,0,0);

    let end = new Date();
    end.setHours(23,59,59,999);
    return (
        model.find({dateOfEvent: {$gte: start, $lt: end}})
    )
}

const getLatestPosts = () =>
    model.find().sort({_id: -1}).limit(4);

const fetchEventById = (id) =>
    model.findById(id);

module.exports = {
    getAllEvents, createEvent, searchEventByKeywords, getTodayEvents, getLatestPosts, fetchEventById, likeEvent, dislikeEvent
};
