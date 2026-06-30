const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const resumeRoutes = require("./routes/resumeRoutes");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

// ================= Middleware =================
app.use(cors());
app.use(express.json());

// ================= Home Route =================
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Novexa Backend 🚀",
  });
});

// ================= Routes =================
app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/ai", aiRoutes);

module.exports = app;