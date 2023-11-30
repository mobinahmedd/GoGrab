import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import applyRequestMiddleware from "./Middlewares/requestMiddlewares.js";

dotenv.config();
const app = express();

applyRequestMiddleware(app);

connectDB();

app.listen(process.env.MAIN_SERVER_PORT || 6000, () => {
  console.log("Main Server running on port", process.env.MAIN_SERVER_PORT);
});
