const express = require("express");
const router = express.Router();

const {
  getProfile,
  updateProfile,
} = require("../controllers/profileController");

// ================= Get Profile =================
router.get("/:email", getProfile);

// ================= Update Profile =================
router.put("/:email", updateProfile);

module.exports = router;