import mongoose from "mongoose";

const reviewsSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
      required: true,
    },
    rating: { type: Number, required: true },
    comment: { type: String },
    // timestamp: { type: Date, default: Date.now, required: true },
  },
  { timestamps: true }
);

const Review = mongoose.model("Reviews", reviewsSchema);

export default Review;
