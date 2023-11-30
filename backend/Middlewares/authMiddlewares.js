import nodemailer from "nodemailer";
import userModel from "../Models/userModel.js";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import otpModel from "../Models/otpModel.js";

dotenv.config();

// email regex middleware
export function isValidEmail(req, res, next) {
  const { email } = req.body.contact;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }
  next();
}

// email already exists
export async function emailAlreadyExists(req, res, next) {
  const { email } = req.body.contact;
  const existingUser = await userModel.findOne({ "contact.email": email });
  if (existingUser) {
    return res.status(400).json({
      message: "Email already exists. Please log in or use a different email.",
    });
  }
  next();
}

// email otp middleware
// let storedOTP;

function generateOTP() {
  const otp = Math.floor(1000 + Math.random() * 9000); // Generating 4-digit OTP
  return otp.toString();
}

const transporter = nodemailer.createTransport({
  service: process.env.SMTP_SERVICE,
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER, // Your Gmail email address
    pass: process.env.SMTP_PASSWORD, // Your Gmail password
  },
});

export async function sendOTPToEmail(req, res, next) {
  const { email } = req.body.contact;
  const otp = generateOTP();

  console.log(otp);

  // const otpData = new otpModel();
  await otpModel.create({ email, otp });

  //   retrieving .html file for email formatting
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const signUpFilePath = path.join(__dirname, "../Emails", "register.html");
  const signUpFile = fs.readFileSync(signUpFilePath, "utf-8");
  const mailOptions = {
    from: "Go Grab <commerce.gograb.info@gmail.com>",
    to: email,
    subject: "Verification OTP", // Email subject
    text: `Your OTP for verification is: ${otp}`, // Email body with OTP
    html: signUpFile.replace("{{OTP}}", otp),
  };

  try {
    await transporter.sendMail(mailOptions); // Send email with OTP
    next();
  } catch (error) {
    return res
      .status(400)
      .json({ error: "Failed to send OTP via email", error });
  }
}
