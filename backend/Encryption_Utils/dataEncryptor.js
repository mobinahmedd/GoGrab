import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.CRYPTO_SECRET_KEY;
const algorithm = process.env.CRYPTO_ALGORITHM;
const ivLength = parseInt(process.env.CRYPTO_IV_LENGTH);

// Function to encrypt data
function encryptData(data) {
  try {
    const iv = crypto.randomBytes(ivLength);
    const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey), iv);

    let encrypted = cipher.update(data, "utf8", "hex");
    encrypted += cipher.final("hex");

    return {
      iv: iv.toString("hex"),
      encryptedData: encrypted,
    };
  } catch (error) {
    console.error("Encryption failed:", error);
    throw error;
  }
}

// Function to decrypt data
function decryptData(encryptedData, initializationVector) {
  try {
    const decipher = crypto.createDecipheriv(
      algorithm,
      Buffer.from(secretKey),
      Buffer.from(initializationVector, "hex")
    );

    let decrypted = decipher.update(encryptedData, "hex", "utf8");
    decrypted += decipher.final("utf8");

    return decrypted;
  } catch (error) {
    console.error("Decryption failed:", error);
    throw error;
  }
}

export { encryptData, decryptData };
