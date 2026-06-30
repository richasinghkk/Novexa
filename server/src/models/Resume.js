const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    fileName: {
      type: String,
      required: true,
    },

    atsScore: {
      type: Number,
      required: true,
    },

    skills: [String],

    missingSkills: [String],

    aiFeedback: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Resume", resumeSchema);