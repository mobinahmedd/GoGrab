// Import necessary libraries and models
import Category from "../Models/categoryModel.js";

// Middleware to get category by ID
export async function getCategory(req, res, next) {
  try {
    const category = await Category.findById(req.params.id);
    if (category == null) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.category = category;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}
