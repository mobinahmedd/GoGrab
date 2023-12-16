import express from "express";
import {
  createOrder,
  getOrders,
  updateOrderStatus,
  deleteOrder,
} from "../Controllers/ordersController.js";

// Create a router instance
const router = express.Router();

// Define the routes for order operations

// Create a new order
router.post("/createOrder", createOrder);

// Get all orders for a specific user
router.get("/getOrders/:userId", getOrders);

// Update the status of an order
router.put("/updateOrderStatus/:orderId", updateOrderStatus);

// Delete an order
router.delete("/deleteOrder/:orderId", deleteOrder);

// Export the router
export default router;
