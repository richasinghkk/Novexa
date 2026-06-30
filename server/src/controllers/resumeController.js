const Resume = require("../models/Resume");
const { analyzeResume } = require("../services/geminiService");

const fs = require("fs");
const pdfParse = require("pdf-parse");

const skillsList = [
  "C",
  "C++",
  "Java",
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "SQL",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "Bootstrap",
  "Git",
  "GitHub",
  "Docker",
  "Kubernetes",
  "AWS",
  "Firebase",
  "TensorFlow",
  "PyTorch",
  "Machine Learning",
  "Deep Learning",
  "Artificial Intelligence",
  "OpenCV",
  "REST API",
];

// ================= Upload Resume =================

const uploadResume = async (req, res) => {
  try {
    const dataBuffer = fs.readFileSync(req.file.path);

    const pdfData = await pdfParse(dataBuffer);

    const resumeText = pdfData.text;

    const aiFeedback = await analyzeResume(resumeText);

    const foundSkills = skillsList.filter((skill) =>
      resumeText.toLowerCase().includes(skill.toLowerCase())
    );

    const missingSkills = skillsList.filter(
      (skill) => !foundSkills.includes(skill)
    );

    let score = 0;

    if (resumeText.toLowerCase().includes("education")) score += 15;
    if (resumeText.toLowerCase().includes("project")) score += 20;
    if (resumeText.toLowerCase().includes("experience")) score += 15;
    if (resumeText.toLowerCase().includes("certification")) score += 10;
    if (resumeText.toLowerCase().includes("skill")) score += 20;
    if (resumeText.includes("@")) score += 10;

    score += Math.min(foundSkills.length * 2, 10);

    score = Math.min(score, 100);

    // Save analysis to MongoDB
    await Resume.create({
      fileName: req.file.originalname,
      atsScore: score,
      skills: foundSkills,
      missingSkills,
      aiFeedback,
    });

    res.status(200).json({
      success: true,
      message: "Resume Analyzed Successfully 🚀",
      atsScore: score,
      skills: foundSkills,
      missingSkills,
      aiFeedback,
      text: resumeText,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// ================= Resume History =================

const getResumeHistory = async (req, res) => {
  try {
    const resumes = await Resume.find().sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      resumes,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  uploadResume,
  getResumeHistory,
};