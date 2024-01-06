import express from "express";
import {
  emailAlreadyExists,
  sendOTPToEmail,
  usernameAlreadyExists,
} from "../Middlewares/authMiddlewares.js";
import {
  verifyOTP,
  signUp,
  login,
  verifyPW,
  refreshAccessToken,
  updatePassword,
} from "../Controllers/authController.js";
import { authenticateToken } from "../JWT_Utils/jwt.js";

const router = express.Router();

let refreshTokens = [];

router.post("/login", login);

router.post("/refresh-token", refreshAccessToken);

router.post("/verify-otp", verifyOTP);

router.post("/verify-oldPassword", authenticateToken, verifyPW);

router.patch("/updatePassword", authenticateToken, updatePassword);

router.post(
  "/signup",
  emailAlreadyExists,
  usernameAlreadyExists,
  sendOTPToEmail,
  signUp
);

export default router;
