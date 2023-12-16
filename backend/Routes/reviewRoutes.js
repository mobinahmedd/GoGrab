import express from "express";
import {
  createReview,
  updateReview,
  getProductReviews,
  deleteReview,
} from "../Controllers/reviewsController.js";

// Create an Express router
const router = express.Router();

// Get all reviews of a product
router.get("/getProductReviews/:id", getProductReviews);

// Create a new review
router.post("/createReview", createReview);

// Update a review by ID
router.patch("/updateReview/:id", updateReview);

// Delete a review by ID
router.delete("/deleteReview/:id", deleteReview);

// Export the router
export default router;
