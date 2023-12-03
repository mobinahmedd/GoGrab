import crypto from "crypto";
import dotenv from "dotenv";

dotenv.config();

const secretKeyString = "32232131232"; // Update this with your key or use environment variable
const secretKey = Buffer.from(
  secretKeyString.padEnd(32, "0").slice(0, 32),
  "utf-8"
);

const algorithm = process.env.CRYPTO_ALGORITHM || "aes-256-cbc";
const ivLength = parseInt(process.env.CRYPTO_IV_LENGTH) || 16;

console.log("Generated secretKey:", secretKey.toString("hex"));

// Function to encrypt data
function encryptData(data) {
  try {
    const iv = crypto.randomBytes(ivLength);
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

    const jsonString = JSON.stringify(data);
    let encrypted = cipher.update(jsonString, "utf8", "hex");
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
      secretKey,
      Buffer.from(initializationVector, "hex")
    );

    let decrypted = decipher.update(encryptedData, "hex", "utf8");
    decrypted += decipher.final("utf8");

    return JSON.parse(decrypted);
  } catch (error) {
    console.error("Decryption failed:", error);
    throw error;
  }
}

export { encryptData, decryptData };
