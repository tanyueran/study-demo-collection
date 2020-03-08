const mongoose = require('../utils/mongoose.js');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: String,
  password: String,
  file: {
    name: String,
    url: String,
  }
}, {
  collection: 'user'
});

module.exports = new mongoose.model('User', UserSchema);