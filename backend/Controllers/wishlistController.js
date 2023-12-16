import Wishlist from "../Models/wishlistModel.js";

export const addToWishlist = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    const wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
      // If the wishlist doesn't exist for the user, create a new one
      const newWishlist = new Wishlist({ userId, products: [productId] });
      const savedWishlist = await newWishlist.save();
      res.status(201).json(savedWishlist);
    } else {
      // If the wishlist already exists, add the new product to it
      wishlist.products.push(productId);
      const updatedWishlist = await wishlist.save();
      res.json(updatedWishlist);
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getWishlist = async (req, res) => {
  const { userId } = req.params;

  try {
    const wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found" });
    }

    res.json(wishlist);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const removeFromWishlist = async (req, res) => {
  const { userId, productId } = req.params;

  try {
    const wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found" });
    }

    const productIndex = wishlist.products.indexOf(productId);

    if (productIndex !== -1) {
      // Remove the product from the wishlist
      wishlist.products.splice(productIndex, 1);

      const updatedWishlist = await wishlist.save();
      res.json(updatedWishlist);
    } else {
      return res
        .status(404)
        .json({ message: "Product not found in the wishlist" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
