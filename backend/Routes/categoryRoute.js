// Import necessary libraries and models
import express from "express";
import {
  createCategory,
  getAllCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} from "../Controllers/categoryController.js";

// Create an Express router
const router = express.Router();

// Get all categories
router.get("/api/categories", getAllCategories);

// Get category by ID
router.get("/api/categories/:id", getCategory);

// Create a new category
router.post("/api/categories", createCategory);

router.patch("/api/categories/:id", updateCategory);

// Delete category by ID
router.delete("/api/categories/:id", deleteCategory);

// Export the router
export default router;
