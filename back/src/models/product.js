import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  brand: { type: String, required: true },
  rating: { rate:{type: Number, required: true }, count: {type: Number, required: true} },
  category: { type: String, required: true },
  quantity: { type: Number, required: true },
  images: { type: Array, default: [] },
  features: { type: Object, default: {} }
})

const Product = mongoose.model('Product', productSchema, 'products');

export default Product;