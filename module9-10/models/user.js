const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    userID: { type: String, trim: false, required: true},
    userName: { type: String, trim: true, required: true },
    // userDOB: { type: Date, default: Date.now()},
    userGender: { type: String},
    userEmail: { type: String, require: true},
    userPassword: { type: String, require: true }
});

// const likeModel = new mongoose.Schema({
//     postID: { type: String, trim: false, required: true, unique: true, default: Date.now()},
//     userID: { type: String, trim: false, required: true, unique: true},
//     likeID: { type: String, required: true, unique: true}
// });

// const commentModel = new mongoose.Schema({
//     postID: { type: String, trim: false, required: true, unique: true, default: Date.now()},
//     userID: { type: String, trim: false, required: true, unique: true},
//     commentID: { type: String, required: true, unique: true},
//     commentContent: { type: String, require: true },
//     commentDate: { type: Date, default: Date.now(), require: true}

// });

const User = mongoose.model("user", userModel);

module.exports = User;