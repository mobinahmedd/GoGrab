// import Wishlist from "../Models/wishlistModel.js";
// import User from "../Models/userModel.js";
// // import { MongoClient, ObjectId } from "mongodb";

// // export const addToWishlist = async (req, res) => {
// //   const { productId } = req.body;
// //   const username = req.user.username;
// //   let userId = await User.findOne({ username });
// //   userId = userId._id;

// //   try {
// //     const wishlist = await Wishlist.findOne({ userId });

// //     if (!wishlist) {
// //       // If the wishlist doesn't exist for the user, create a new one
// //       const newWishlist = new Wishlist({ userId, products: [productId] });
// //       const savedWishlist = await newWishlist.save();
// //       res.status(201).json(savedWishlist);
// //     } else {
// //       // If the wishlist already exists, add the new product to it
// //       wishlist.products.push(productId);
// //       const updatedWishlist = await wishlist.save();
// //       res.json(updatedWishlist);
// //     }
// //   } catch (err) {
// //     res.status(400).json({ message: err.message });
// //   }
// // };
// export const getWishlist = async (req, res) => {
//   const username = req.user.username;
//   const userId = await User.findOne({ username });
//   try {
//     const wishlist = await Wishlist.findOne({ userId });

//     if (!wishlist) {
//       return res.status(404).json({ message: "Wishlist not found" });
//     }

//     res.json(wishlist);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

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

// export const addToWishlist = async (req, res) => {
//   const { productId } = req.body;
//   const username = req.user.username;
//   const user = await User.findOne({ username });
//   const userId = user._id;
//   console.log(user);
//   try {
//     const wishlist = await Wishlist.findOne({ userId });
//     const productExist = await Wishlist.find({
//       userId: userId,
//       products: { $in: [productId] },
//     });

//     if (!wishlist) {
//       // If the wishlist doesn't exist for the user, create a new one
//       const newWishlist = new Wishlist({ userId, products: [productId] });
//       const savedWishlist = await newWishlist.save();
//       res.status(201).json(savedWishlist);
//     } else {
//       if (productExist.length === 0) {
//         wishlist.products.push(productId);
//         const updatedWishlist = await wishlist.save();
//         res.status(201).json(updatedWishlist);
//       } else {
//         res
//           .status(400)
//           .json({ message: "Product already exist in your wishlist" });
//       }
//     }
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };

import Wishlist from "../Models/wishlistModel.js";
import User from "../Models/userModel.js";

export const addToWishlist = async (req, res) => {
  const { productId } = req.body;
  const username = req.user.username;
  const user = await User.findOne({ username });
  const userId = user._id;
  console.log(productId);
  console.log(user);
  try {
    const wishlist = await Wishlist.findOne({ userId });
    const productExist = await Wishlist.find({
      userId: userId,
      products: { $in: [productId] },
    });

    if (!wishlist) {
      // If the wishlist doesn't exist for the user, create a new one
      const newWishlist = new Wishlist({ userId, products: [productId] });
      const savedWishlist = await newWishlist.save();
      res.status(201).json(savedWishlist);
    } else {
      if (productExist.length === 0) {
        wishlist.products.push(productId);
        const updatedWishlist = await wishlist.save();
        res.status(201).json(updatedWishlist);
      } else {
        res
          .status(400)
          .json({ message: "Product already exist in your wishlist" });
      }
    }
  } catch (err) {
    console.log("mobin", err);
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
