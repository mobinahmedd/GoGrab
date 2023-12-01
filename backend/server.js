import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import applyRequestMiddleware from "./Middlewares/requestMiddlewares.js";
import categoryRoutes from "./Routes/categoryRoute.js";
import productRoutes from "./Routes/productRoutes.js";

import authRoute from "./Routes/authRoutes.js";
dotenv.config();
const app = express();

applyRequestMiddleware(app);

connectDB();

app.listen(process.env.MAIN_SERVER_PORT || 6000, () => {
  console.log("Main Server running on port", process.env.MAIN_SERVER_PORT);
});

app.use(categoryRoutes);
app.use(productRoutes);
