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

  roles: {
    type: [String],
    default: ['user'],
  },
});

// Pre-save middleware to encrypt password
UserSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Custom post-save middleware for more custom error handling
UserSchema.post('save', function (err, _doc, next) {
  if (err.keyPattern.email) {
    next(new Error('An account with this email already exists!'));
  } else {
    next(err);
  }
});

// Custom method to compare and validate password for logging in
UserSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', UserSchema);

module.exports = User;
