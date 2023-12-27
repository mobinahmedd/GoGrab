import Cart from "../Models/cartModel.js";

export const addToCart = async (req, res) => {
  const { userId, productId } = req.body; // Corrected variable name
  const productExist = await Cart.find({
    userId: userId,
    products: {
      $elemMatch: { productId: productId },
    },
  });

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      // If the cart doesn't exist for the user, create a new one
      const newCart = new Cart({
        userId,
        products: [{ productId: productId, quantity: 1 }],
      });
      const savedCart = await newCart.save();
      res.status(201).json(savedCart);
    } else {
      if (productExist.length === 0) {
        cart.products.push({ productId, quantity: 1 }); // Corrected variable name
        const updatedCart = await cart.save();
        res.status(201).json(updatedCart);
      } else {
        res.status(400).json({ message: "Product already exist in your Cart" });
      }
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getCart = async (req, res) => {
  const { userId } = req.params;

  try {
    const cart = await Cart.findOne({ userId }).populate(
      "products.productId",
      "name price images"
    );

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// export const getCart = async (req, res) => {
//   const { userId } = req.params;

//   try {
//     const cart = await Cart.findOne({ userId });

//     if (!cart) {
//       return res.status(404).json({ message: "Cart not found" });
//     }

//     res.json(cart);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

export const updateCart = async (req, res) => {
  const { userId } = req.params;
  const { products } = req.body;

  try {
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    cart.products = products; // Assuming you send the entire updated products array

    const updatedCart = await cart.save();
    res.json(updatedCart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const removeFromCart = async (req, res) => {
  const { userId, productId } = req.params;

  try {
    const cart = await Cart.findOne({ userId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const productIndex = cart.products.findIndex(
      (p) => p.productId == productId
    );

    if (productIndex !== -1) {
      // Remove the product from the cart
      cart.products.splice(productIndex, 1);

      const updatedCart = await cart.save();
      res.json(updatedCart);
    } else {
      return res.status(404).json({ message: "Product not found in the cart" });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
