const model = require('./model');

const findAllUsers = () => model.find();

const deleteUser = (id) =>
    model.deleteOne({_id: id});

const createUser = (user) =>
    model.create(user);

const findUserById = (id) =>
    model.find().findOne({_id:id});

const updateUser = (id, user) =>
    model.find().findOneAndUpdate({_id:id},{$set:user});
    // model.updateOne({_id: id},
    //     {$set: user});

const findUserByEmailIdPassword = (email,password) =>
    model.find().findOne({email:email,password:password});

module.exports = {
    findAllUsers, deleteUser, createUser, findUserById, updateUser, findUserByEmailIdPassword
};