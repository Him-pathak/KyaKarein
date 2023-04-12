const mongoose = require("mongoose");

const AnswerSchema = new mongoose.Schema({
  answer: String,
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "questions",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  user: Object,
  audio: [String],
  // likes : [String],
  // dislikes : [String],
});

module.exports = mongoose.model("Answers", AnswerSchema);
