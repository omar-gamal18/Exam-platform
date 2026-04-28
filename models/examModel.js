const mongoose = require("mongoose");

const examSchema = mongoose.Schema(
  {
    grade: {
      type: String,
      enum: ["grade one", "grade two", "grade three", "grade four"],
      required: [true, "pls provide exam garde"],
    },
    department: {
      type: String,
      enum: ["it", "is", "cs"],
      required: [true, "pls provide exam department"],
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      default: "easy",
    },
    subject: {
      type: String,
      default: "exam",
    },
    instractor_name: String,
    subject: String,
    status: String,
  },
  {
    timestamps: true,
  },
);

const Exam = mongoose.model("Exam", Exam);

module.exports = Exam;
