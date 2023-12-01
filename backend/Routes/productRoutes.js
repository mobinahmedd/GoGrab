import express from "express";
import {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} from "../Controllers/productController.js";
// Create an Express router
const router = express.Router();

// Get all products
router.get("/api/products", getAllProducts);

// Get product by ID
router.get("/api/products/:id", getProduct);

// Create a new product
router.post("/api/products", createProduct);

// Update a product by ID
router.patch("/api/products/:id", updateProduct);

// Delete product by ID
router.delete("/api/products/:id", deleteProduct);

// Export the router
export default router;
