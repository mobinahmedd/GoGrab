import express from "express";
import {
  createProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
} from "../Controllers/productController.js";
// Create an Express router
const router = express.Router();

// Get all products
router.get("/getAllProducts", getAllProducts);

// Get product by ID
router.get("/getProduct/:id", getProduct);

// Create a new product
router.post("/createProduct", createProduct);

// Update a product by ID
router.patch("/updateProduct/:id", updateProduct);

// Delete product by ID
router.delete("/deleteProduct/:id", deleteProduct);

// Define a route for searching products by name
router.get("/searchProduct", searchProduct);

// Export the router
export default router;
