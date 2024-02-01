const { Schema, model } = require('mongoose');

const OrderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Clothing',
    },
  ],
  customer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  guestEmail: {
    type: String,
    match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
  },
  shippingAddress: {
    recipientName: {
      type: String,
      required: [true, 'Recipient name is required'],
    },
    line1: {
      type: String,
      required: [true, 'Address line 1 is required'],
    },
    line2: {
      type: String,
    },
    city: {
      type: String,
      required: [true, 'City is required'],
    },
    state: {
      type: String,
      required: [true, 'State is required'],
    },
    zip: {
      type: String,
      required: [true, 'Zip code is required'],
    },
    country: {
      type: String,
      required: [true, 'Country is required'],
    },
  },
  billingAddress: {
    nameOnCard: {
      type: String,
      required: [true, 'Recipient name is required'],
    },
    line1: {
      type: String,
      required: [true, 'Address line 1 is required'],
    },
    line2: {
      type: String,
    },
    city: {
      type: String,
      required: [true, 'City is required'],
    },
    state: {
      type: String,
      required: [true, 'State is required'],
    },
    zip: {
      type: String,
      required: [true, 'Zip code is required'],
    },
    country: {
      type: String,
      required: [true, 'Country is required'],
    },
  },
});

const Order = model('Order', OrderSchema);

module.exports = Order;
