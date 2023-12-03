import express from "express";
import dotenv from "dotenv";
import connectDB from "./Config/db.js";
import applyRequestMiddleware from "./Middlewares/requestMiddlewares.js";
import categoryRoutes from "./Routes/categoryRoutes.js";
import productRoutes from "./Routes/productRoutes.js";
import userRoutes from "./Routes/userRoutes.js";
import { encryptData, decryptData } from "./Encryption_Utils/dataEncryptor.js";

dotenv.config();
const app = express();

applyRequestMiddleware(app);

connectDB();

app.listen(process.env.MAIN_SERVER_PORT || 6000, () => {
  console.log("Main Server running on port", process.env.MAIN_SERVER_PORT);
  const data = {
    name: "4K Smart TV",
    description: "Large-screen smart TV with 4K resolution and smart features",
    price: 1699.99,
    quantity: 40,
    discount: 12,
    categoryId: "615c41ef2a4429a074df3569",
    subcategoryId: "615c41ef2a4429a074df356c",
    images: [
      "https://example.com/tv1.jpg",
      "https://example.com/tv2.jpg",
      "https://example.com/tv3.jpg",
    ],
    timesSold: 10,
    sellerId: "615c41ef2a4429a074df356e",
  };
  console.log(data);
  const encryptedData = encryptData(data);
  console.log(encryptedData);
  const decryptedData = decryptData(
    encryptedData.encryptedData,
    encryptedData.iv
  );
  console.log(decryptedData);
});

app.use("/api/categories", categoryRoutes);
app.use("/api/products/", productRoutes);
app.use("/api/users/", userRoutes);
