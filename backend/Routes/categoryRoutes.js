// Import necessary libraries and models
import express from "express";
import {
  createCategory,
  getAllCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} from "../Controllers/categoryController.js";
import { authenticateToken } from "../JWT_Utils/jwt.js";

// Create an Express router
const router = express.Router();

// Get all categories
// router.get("/getAllCategories", authenticateToken, getAllCategories);
router.get("/getAllCategories", authenticateToken, getAllCategories);

// Get category by ID
router.get("/getCategory/:id", getCategory);

// Create a new category
router.post("/createCategory", authenticateToken, createCategory);

router.patch("/updateCategory/:id", updateCategory);

// Delete category by ID
router.delete("/deleteCategory/:id", deleteCategory);

// Export the router
export default router;
