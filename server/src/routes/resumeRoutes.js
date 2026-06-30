const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");

const {
  uploadResume,
  getResumeHistory,
} = require("../controllers/resumeController");

// Upload Resume
router.post(
  "/upload",
  upload.single("resume"),
  uploadResume
);

// Resume History
router.get("/history", getResumeHistory);

module.exports = router;