const model = require('./model');

const getAllPosts = () => model.find().sort({_id: -1});

const createPost = (post) =>
    model.create(post);

const fetchPostById = (eventId) =>
    model.find('eventId');

module.exports = {
    getAllPosts, createPost, fetchPostById
};
