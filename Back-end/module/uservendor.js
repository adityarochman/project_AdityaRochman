const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/vendor");

const Schema = mongoose.Schema;

const uservendorSchema = new Schema({
    name: String,
    namevendor: String,
    address: String,
    category: String,
    email: String,
    phoneNumber: Number,
    since: String,
    description: String,
    profile: String,
    username: String,
    password: String
});

const UserVendor = mongoose.model("uservendor", uservendorSchema);

module.exports = UserVendor;