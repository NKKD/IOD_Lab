const mongoose = require("mongoose");

const postModel = new mongoose.Schema({
    postID: { type: String, trim: false, required: true, unique: true, default: Date.now()},
    userID: { type: String, trim: false, required: true, unique: true},
    postContent: { type: String, require: true },
    postDate: { type: Date, default: Date.now(), require: true}
});

const Post = mongoose.model("post", postModel);


module.exports = Post;