const { Schema, model } = require('mongoose');

const ClothingSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  category: {
    type: String,
    enum: ['Mens', 'Womens'],
    required: [true, 'Category is required'],
  },
  subtype: {
    type: String,
    enum: ['Shirt', 'Pants', 'Shorts', 'Outerwear', 'Top', 'Dress', 'Skirt'],
    required: [true, 'Subtype is required'],
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  sizes: {
    type: [String],
    default: [],
    enum: ['XS', 'S', 'M', 'L', 'XL'],
  },
  imageUrl: {
    type: String,
  },
});

const Clothing = model('Clothing', ClothingSchema);

module.exports = Clothing;
