// Import necessary libraries and models
import express from "express";
import Category from "../Models/categoryModel.js";
import { getCategory } from "../Middlewares/categoryMiddlewares.js";

// Create an Express router
const router = express.Router();

// Get all categories
router.get("/api/categories", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get category by ID
router.get("/api/categories/:id", getCategory, (req, res) => {
  res.json(res.category);
});

// Create a new category
router.post("/api/categories", async (req, res) => {
  const category = new Category(req.body);
  try {
    const newCategory = await category.save();
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch("/api/categories/:id", async (req, res) => {
  const categoryId = req.params.id;
  const updateData = req.body;

  console.log("Received Update Data:", updateData);

  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      updateData,
      { new: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({ error: "Category not found" });
    }

    res.json(updatedCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete category by ID
router.delete("/api/categories/:id", getCategory, async (req, res) => {
  //   const id = res.body._id;
  const { id } = req.params;
  try {
    await Category.findByIdAndDelete({ _id: id });
    res.json({ message: "Category deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Export the router
export default router;
