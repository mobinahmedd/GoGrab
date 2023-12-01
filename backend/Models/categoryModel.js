import mongoose from "mongoose";

const subcategorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
});

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  subcategories: {
    type: [subcategorySchema],
  },
});

const Category = mongoose.model("category", categorySchema);

export default Category;
