import userModel from "../Models/userModel.js";
import {
  hashPassword,
  comparePassword,
} from "../Encryption_Utils/passwordEncryptor.js";
import { encryptData, decryptData } from "../Encryption_Utils/dataEncryptor.js";
import otpModel from "../Models/otpModel.js";

export async function verifyOTP(req, res) {
  const { email, otp } = req.body;

  const otpData = await otpModel.findOne({ email });
  const savedOTP = otpData.otp;

  if (otp !== savedOTP) {
    return res.status(400).json({ error: "Invalid OTP" });
  }
  await otpModel.findOneAndDelete({ email });

  res.status(201).json({ message: "Correct OTP" });
}

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

    // generate tokens
    // const user = { username: username, password: password };
    // const accessToken = generateToken(user);
    // const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
    // refreshTokens.push(refreshToken);

    res.status(201).json({
      message: "User created successfully",
      user: newUser,
      // accessToken: accessToken,
      // refreshToken: refreshToken,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create user", error });
  }
}
