import userModel from "../Models/userModel.js";
import jwt from "jsonwebtoken";
import {
  hashPassword,
  comparePassword,
} from "../Encryption_Utils/passwordEncryptor.js";
import { generateToken, authenticateToken } from "../JWT_Utils/jwt.js";
import otpModel from "../Models/otpModel.js";

let refreshTokens = [];

// login
export async function login(req, res) {
  const { username, password } = req.body;
  const userData = await userModel.findOne({ username });
  if (!userData) {
    return res.status(404).json({ message: "user not found" });
  }

  const isPasswordCorrect = await comparePassword(password, userData.password);
  console.log(isPasswordCorrect);

  if (!isPasswordCorrect) {
    return res.status(401).json({ message: "Incorrect Password." });
  }

  const user = { username: username };
  const accessToken = generateToken(user);
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
  refreshTokens.push(refreshToken);
  res.json({ accessToken: accessToken, refreshToken: refreshToken });
}

// refresh access token
export async function refreshAccessToken(req, res) {
  const refreshToken = req.body.token;
  if (refreshToken == null)
    return res.status(401).json({ message: "empty refresh token" });
  if (!refreshTokens.includes(refreshToken))
    return res.status(403).json({ message: "invalid refresh token" });
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateToken({ username: user.username });
    console.log(user);
    res.json({ accessToken: accessToken });
  });
}

// verify otp
export async function verifyOTP(req, res) {
  const { email, otp } = req.body;

  const otpData = await otpModel.findOne({ email });

  if (!otpData) {
    return res.status(400).json({ message: "Invalid Email" });
  }

  if (otp !== otpData.otp) {
    otpData.attemptsLeft = otpData.attemptsLeft - 1;
    await otpData.save();

    if (otpData.attemptsLeft <= 0) {
      await otpModel.findOneAndDelete({ email });
      await userModel.findOneAndDelete({ "contact.email": email });

      return res.status(400).json({
        message: "Blocked",
      });
    }
    return res
      .status(400)
      .json({ error: "Invalid OTP", attemptsLeft: otpData.attemptsLeft });
  }
  console.log("deleting otp");
  await otpModel.findOneAndDelete({ email });
  res.status(201).json({ message: "Correct OTP, Account Created." });
}

// sign up
export async function signUp(req, res) {
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

    res.status(201).json({
      message: "User created successfully",
      user: newUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create user", error });
  }
}
