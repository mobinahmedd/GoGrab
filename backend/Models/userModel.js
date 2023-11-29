import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: false,
    },
  },
  address: {
    floor: {
      type: String,
      required: false,
    },
    houseNo: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: false,
    },
    area: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "seller", "buyer"],
    required: true,
  },
  contact: {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: [
      {
        type: String,
        required: true,
      },
    ],
  },
  avatar: {
    type: String, // You can store the URL or file path of the avatar image
    // type: Buffer,
    require: false,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
