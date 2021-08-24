const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passortLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

UserSchema.plugin(passortLocalMongoose);
module.exports = mongoose.model('User', UserSchema);

