"use strict";
let Models = require("../models"); //matches index.js

const getPosts = (res) => {
    //finds all users
    Models.Post.find({})
        .then(users => res.send(users))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}


const createPost = (userPayload, res) => {
    new Models.Post(userPayload).save()
        .then(user => res.send(user))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const deletePost = (postID, res) => {
    Models.Post.findOneAndRemove(postID)
        .then(deletedPost => {
            if (!deletedPost) {
                res.status(404).send({ result: 404, error: 'Post not found' });
            } else {
                res.status(200).send({ result: 200, message: 'Post deleted successfully' });
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({ result: 500, error: err.message });
        });
};


module.exports = {
    getPosts, createPost, deletePost
}