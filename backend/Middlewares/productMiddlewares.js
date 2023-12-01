// Import necessary libraries and models
import Product from "../Models/productModel.js";

// Middleware to get product by ID
export async function getProduct(req, res, next) {
  try {
    const product = await Product.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.product = product;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}
