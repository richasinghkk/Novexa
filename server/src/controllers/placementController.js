// ================= Placement Predictor =================

const predictPlacement = async (req, res) => {
  try {
    const {
      cgpa,
      dsa,
      projects,
      internships,
      ats,
      communication,
    } = req.body;

    // Validation
    if (
      cgpa === undefined ||
      dsa === undefined ||
      projects === undefined ||
      internships === undefined ||
      ats === undefined ||
      communication === undefined
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    let score = 0;

    // CGPA (30 Marks)
    score += (Number(cgpa) / 10) * 30;

    // DSA (20 Marks)
    score += (Number(dsa) / 100) * 20;

    // Projects (15 Marks)
    score += Math.min(Number(projects) * 3, 15);

    // Internships (15 Marks)
    score += Math.min(Number(internships) * 5, 15);

    // ATS Score (10 Marks)
    score += (Number(ats) / 100) * 10;

    // Communication (10 Marks)
    score += (Number(communication) / 10) * 10;

    score = Math.min(Math.round(score), 100);

    let recommendation = "";

    if (score >= 85) {
      recommendation =
        "Excellent! You have a very high chance of getting placed. Keep improving your interview and communication skills.";
    } else if (score >= 70) {
      recommendation =
        "Good chances of placement. Improve your DSA, resume, and communication to increase your opportunities.";
    } else if (score >= 50) {
      recommendation =
        "Average chances. Focus on projects, internships, and problem-solving to improve your profile.";
    } else {
      recommendation =
        "Your placement chances are currently low. Work on your CGPA, DSA, resume, projects, and interview preparation.";
    }

    res.status(200).json({
      success: true,
      probability: score,
      recommendation,
    });

  } catch (error) {
    console.error("Placement Prediction Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  predictPlacement,
};