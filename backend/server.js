import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import applyRequestMiddleware from "./Middlewares/requestMiddlewares.js";
import categoryRoutes from "./Routes/categoryRoutes.js";
import productRoutes from "./Routes/productRoutes.js";
import userRoutes from "./Routes/userRoutes.js";
import reviewRoutes from "./Routes/reviewRoutes.js";
import cartRoutes from "./Routes/cartRoutes.js";
import wishlistRoutes from "./Routes/wishlistRoutes.js";
import orderRoutes from "./Routes/wishlistRoutes.js";

dotenv.config();
const app = express();

applyRequestMiddleware(app);

connectDB();

app.listen(process.env.MAIN_SERVER_PORT || 6000, () => {
  console.log("Main Server running on port", process.env.MAIN_SERVER_PORT);
});

app.use("/api/categories", categoryRoutes);
app.use("/api/products/", productRoutes);
app.use("/api/users/", userRoutes);
app.use("/api/reviews/", reviewRoutes);
app.use("/api/cart/", cartRoutes);
app.use("/api/wishlist/", wishlistRoutes);
app.use("/api/orders/", orderRoutes);
