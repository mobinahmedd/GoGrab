import express from "express";
import Product from "../Models/productModel.js";
import { getProduct } from "../Middlewares/productMiddlewares.js";

// Create an Express router
const router = express.Router();

// Get all products
router.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get product by ID
router.get("/api/products/:id", getProduct, (req, res) => {
  res.json(res.product);
});

// Create a new product
router.post("/api/products", async (req, res) => {
  const product = new Product(req.body);
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a product by ID
router.patch("/api/products/:id", async (req, res) => {
  const productId = req.params.id;
  const updateData = req.body; // Assuming you send the updated fields in the request body

  try {
    // Find the product by ID and update it
    const updatedProduct = await productModel.findByIdAndUpdate(
      productId,
      updateData,
      { new: true } // Returns the updated document
    );

    if (!updatedProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete product by ID
router.delete("/api/products/:id", getProduct, async (req, res) => {
  try {
    await res.product.remove();
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Export the router
export default router;
