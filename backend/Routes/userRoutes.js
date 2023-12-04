// Import necessary libraries and models
import express from "express";
import {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
  searchUser,
} from "../Controllers/userController.js";
import { authenticateToken } from "../JWT_Utils/jwt.js";

// Create an Express router
const router = express.Router();

// Get all categories
// router.get("/getAllCategories", authenticateToken, getAllCategories);
router.get("/getAllUsers", getAllUsers);

// Get category by ID
router.get("/getUser/:id", getUser);

router.patch("/updateUser/:id", updateUser);

// Delete category by ID
router.delete("/deleteUser/:id", deleteUser);

// Search/filter users based on criteria
router.get("/searchUser", searchUser);

// Export the router
export default router;
