import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  otp: {
    type: String,
    required: true,
  },
  attemptsLeft: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 120,
  },
});

const otpModel = mongoose.model("OTP", otpSchema);

export default otpModel;
