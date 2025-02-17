const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
}, { timestamps: true });

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;
