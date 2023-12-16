import Review from "../Models/reviewsModel.js";

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

export const getProductReviews = async (req, res) => {
  const productId = req.params.productId;

  try {
    const productReviews = await Review.find({ productId });
    res.json(productReviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
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
