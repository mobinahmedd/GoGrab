import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
  },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  subcategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category.subcategories",
  },
  images: {
    type: [Buffer],
    required: true,
  },
  timesSold: {
    type: Number,
    required: true,
  },
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
