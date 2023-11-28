import express from "express";
import userModel from "../Models/userModel.js";
import {
  hashPassword,
  comparePassword,
} from "../Encryption_Utils/passwordEncryptor.js";
import { encryptData, decryptData } from "../Encryption_Utils/dataEncryptor.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, name, address, password, role, contact, avatar } = req.body;

  try {
    const newUser = await userModel.create({
      username: username,
      name: name,
      address: address,
      password: await hashPassword(password),
      role: role,
      contact: contact,
      avatar: avatar,
    });

    res
      .status(201)
      .json({ message: "User created successfully", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create user", error });
  }
});

router.post("/login", (req, res) => {});
export default router;
