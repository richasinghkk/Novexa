const express = require("express");
const router = express.Router();

const {
  generateQuestion,
  evaluateAnswer,
} = require("../controllers/interviewController");

// Generate Interview Question
router.post("/question", generateQuestion);

// Evaluate Candidate Answer
router.post("/evaluate", evaluateAnswer);

module.exports = router;