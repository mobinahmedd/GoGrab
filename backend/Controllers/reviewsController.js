import Review from "../Models/reviewsModel.js";
import mongoose from "mongoose";

export const createReview = async (req, res) => {
  const { userId, productId, rating, comment } = req.body;

  try {
    const newReview = new Review({ userId, productId, rating, comment });
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a review by ID
export const updateReview = async (req, res) => {
  const reviewId = req.params.id;
  const updateData = req.body;

  try {
    const updatedReview = await Review.findByIdAndUpdate(reviewId, updateData, {
      new: true,
    });

    if (!updatedReview) {
      return res.status(404).json({ error: "Review not found" });
    }

    res.json(updatedReview);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const averageRating = async (req, res) => {
  try {
    const productId = req.params.id;
    const result = await Review.aggregate([
      { $match: { productId: new mongoose.Types.ObjectId(productId) } },
      {
        $group: {
          _id: null,
          averageRating: { $avg: "$rating" },
        },
      },
    ]);

    if (result.length > 0) {
      res.json({ averageRating: result[0].averageRating });
    } else {
      res.json({ averageRating: 0 });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a review by ID
export const deleteReview = async (req, res) => {
  const { id } = req.params;
  try {
    await Review.findByIdAndDelete({ _id: id });
    res.json({ message: "Review deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
