const express = require("express");
const router = express.Router();

const {
  predictPlacement,
} = require("../controllers/placementController");

router.post("/predict", predictPlacement);

module.exports = router;