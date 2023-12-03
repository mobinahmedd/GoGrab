import Product from "../Models/productModel.js";

export const createProduct = async (req, res) => {
  const product = new Product(req.body);
  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product == null) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const updateData = req.body; // Assuming you send the updated fields in the request body

  try {
    // Find the product by ID and update it
    const updatedProduct = await Product.findByIdAndUpdate(
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
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete({ _id: id });
    res.json({ message: "Product deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const searchProduct = async (req, res) => {
  try {
    const { name } = req.query;

    // Use a regular expression to make the search case-insensitive and partial
    const regex = new RegExp(name, "i");

    // Use the find method to search for products by name
    const products = await Product.find({ name: regex });

    if (!products) {
      return res.status(404).json({ error: "Product not found" });
    }
    // Send the products as a response
    res.json(products);
  } catch (error) {
    // Handle any errors that occur during the search
    res.status(500).json({ error: "Internal Server Error" });
  }
};
