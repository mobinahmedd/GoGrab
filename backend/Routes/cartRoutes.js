import express from "express";
import {
  addToCart,
  getCart,
  updateCart,
  removeFromCart,
} from "../Controllers/cartController.js";

// Create an Express router
const router = express.Router();

// Get all products in a cart by user ID
router.get("/getCart/:userId", getCart);

// Add a new product to the cart
router.post("/addToCart", addToCart);

// Update the cart by user ID
router.patch("/updateCart/:userId", updateCart);

// Delete a product by user ID and product
router.delete("/removeFromCart/:userId/:productId", removeFromCart);

// Export the router
export default router;
