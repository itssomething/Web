const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, default: 0},
    email: {type: String, default:0 }
});

module.exports = mongoose.model("user", UserSchema);