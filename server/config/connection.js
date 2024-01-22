const mongoose = require('mongoose');
require('dotenv').config();

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:271017/ecommerceApp')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => console.log(err));

module.exports = mongoose.connection;
