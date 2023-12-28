import express from "express";
import {
  createReview,
  updateReview,
  averageRating,
  deleteReview,
} from "../Controllers/reviewsController.js";
import { authenticateToken } from "../JWT_Utils/jwt.js";

// Create an Express router
const router = express.Router();

// Get all reviews of a product
router.get("/averageRating/:id", averageRating);

// Create a new review
router.post("/createReview", createReview);

// Update a review by ID
router.patch("/updateReview/:id", updateReview);

// Delete a review by ID
router.delete("/deleteReview/:id", deleteReview);

// Export the router
export default router;
