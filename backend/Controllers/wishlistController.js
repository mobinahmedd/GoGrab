import Wishlist from "../Models/wishlistModel.js";
import User from "../Models/userModel.js";

export const addToWishlist = async (req, res) => {
  const { productId } = req.body;
  const username = req.user.username;

  try {
    // Find the user by username to get the userId
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const userId = user._id;

    // Find the wishlist for the user
    const wishlist = await Wishlist.findOne({ userId });

    // Check if the product already exists in the wishlist
    const productExists = wishlist
      ? wishlist.products.some((product) => product.productId.equals(productId))
      : false;

    if (!wishlist) {
      // If the wishlist doesn't exist for the user, create a new one
      const newWishlist = new Wishlist({ userId, products: [{ productId }] });
      const savedWishlist = await newWishlist.save();
      return res.status(201).json(savedWishlist);
    } else {
      if (!productExists) {
        // If the product doesn't exist in the wishlist, add it
        wishlist.products.push({ productId });
        const updatedWishlist = await wishlist.save();
        return res.status(201).json(updatedWishlist);
      } else {
        return res
          .status(400)
          .json({ message: "Product already exists in your wishlist" });
      }
    }
  } catch (err) {
    console.log("Error:", err);
    return res.status(400).json({ message: "Something went wrong" });
  }
};

export const getWishlist = async (req, res) => {
  const username = req.user.username;

  // Find the user by username to get the userId
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const userId = user._id;
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

// export const removeFromWishlist = async (req, res) => {
//   const { userId, productId } = req.params;

//   try {
//     const wishlist = await Wishlist.findOne({ userId });

//     if (!wishlist) {
//       return res.status(404).json({ message: "Wishlist not found" });
//     }

//     const productIndex = wishlist.products.indexOf(productId);

//     if (productIndex !== -1) {
//       // Remove the product from the wishlist
//       wishlist.products.splice(productIndex, 1);

//       const updatedWishlist = await wishlist.save();
//       res.json(updatedWishlist);
//     } else {
//       return res
//         .status(404)
//         .json({ message: "Product not found in the wishlist" });
//     }
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

export const removeFromWishlist = async (req, res) => {
  const { productId } = req.params;
  // console.log(req.users);
  const username = req.user.username;

  // Find the user by username to get the userId
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const userId = user._id;
  try {
    const wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
      return res.status(404).json({ message: "Wishlist not found" });
    }

    const productIndex = wishlist.products.findIndex(
      (product) => product.productId.toString() === productId
    );

    if (productIndex !== -1) {
      // Remove the product from the wishlist array
      wishlist.products.splice(productIndex, 1);

      const updatedWishlist = await wishlist.save();
      return res.json(updatedWishlist);
    } else {
      return res
        .status(404)
        .json({ message: "Product not found in the wishlist" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
