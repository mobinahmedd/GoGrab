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
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Categories" },
  subcategoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Categories.subcategories",
  },

  images: {
    type: [String],
    required: true,
  },
  timesSold: {
    type: Number,
    required: true,
  },
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
});

const Product = mongoose.model("products", productSchema);

export default Product;
