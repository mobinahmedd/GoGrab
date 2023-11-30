import express from "express";
import {
  emailAlreadyExists,
  isValidEmail,
  sendOTPToEmail,
} from "../Middlewares/authMiddlewares.js";
import { verifyOTP, signUp } from "../Controllers/authController.js";

const router = express.Router();

let refreshTokens = [];

router.post("/verify-otp", verifyOTP);

router.post(
  "/signup",
  emailAlreadyExists,
  isValidEmail,
  sendOTPToEmail,
  signUp
);

export default router;
