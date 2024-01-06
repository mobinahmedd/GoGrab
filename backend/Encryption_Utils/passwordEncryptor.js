import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

// Function to hash a password
export async function hashPassword(password) {
  try {
    const saltRounds = +process.env.SALT_ROUNDS || 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    throw new Error("Password hashing failed");
  }
}

// Function to compare a password with its hash
export async function comparePassword(password, hashedPassword) {
  try {
    // console.log(password, hashPassword);
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
  } catch (error) {
    throw new Error("Password comparison failed");
  }
}
