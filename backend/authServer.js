import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import applyRequestMiddleware from "./Middlewares/requestMiddlewares.js";
import authRoutes from "./Routes/authRoutes.js";

dotenv.config();
const app = express();

applyRequestMiddleware(app);

connectDB();

app.use("/api/users/", authRoutes);

app.listen(process.env.AUTH_SERVER_PORT || 3000, () => {
  console.log("Auth Server running on port", process.env.AUTH_SERVER_PORT);
});
