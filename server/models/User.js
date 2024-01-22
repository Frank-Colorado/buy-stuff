const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
  },

  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [5, 'Password must be 5 characters or longer'],
  },
});

const User = model('User', UserSchema);

module.exports = User;
