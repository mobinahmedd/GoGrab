import express from "express";
import {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
} from "../Controllers/wishlistController.js";
import { authenticateToken } from "../JWT_Utils/jwt.js";
// Create an Express router
const router = express.Router();

// Get wishlist of a user by user ID
router.get("/getWishlist/:userId", getWishlist);

// Add a new product to the wishlist
router.post("/addToWishlist", authenticateToken, addToWishlist);

//Remove a product from the wishlist by user ID
router.delete("/removeFromWishlist/:userId/:productId", removeFromWishlist);

// Export the router
export default router;
