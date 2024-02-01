const { Schema, model } = require('mongoose');
const AddressSchema = require('./Address');

const OrderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  products: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        ref: 'Clothing',
      },
      selectedSize: {
        type: String,
      },
      quantity: {
        type: Number,
      },
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
    type: AddressSchema,
    required: [true, 'Shipping address is required'],
  },
  billingAddress: {
    type: AddressSchema,
    required: [true, 'Billing address is required'],
  },
});

const Order = model('Order', OrderSchema);

module.exports = Order;
