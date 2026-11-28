const mongoose = require("mongoose");

const POST_TOPICS = ["Pregnancy", "New Mothers", "Parenting"];

const postSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, "Post content is required"],
      trim: true,
      maxlength: [1000, "Post content must be 1000 characters or fewer"],
    },
    topic: {
      type: String,
      required: [true, "Topic is required"],
      enum: {
        values: POST_TOPICS,
        message: "Topic must be one of: Pregnancy, New Mothers, Parenting",
      },
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Post author is required"],
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

module.exports = mongoose.model("Post", postSchema);