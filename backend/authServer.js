import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import applyRequestMiddleware from "./Middlewares/requestMiddlewares.js";
import authRoutes from "./Routes/authRoutes.js";
const port = process.env.AUTH_SERVER_PORT || 3000;
dotenv.config();
const app = express();

applyRequestMiddleware(app);

connectDB();

app.use("/api/auth/", authRoutes);

app.listen(port, () => {
  console.log("Auth Server running on port", port);
});
