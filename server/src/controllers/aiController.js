const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

const chatWithAI = async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    // Safe access
    const question = req.body?.question;

    if (!question || question.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Question is required",
      });
    }

    const prompt = `
You are Novexa AI Mentor.

You help students with:
- Career Guidance
- Resume Improvement
- Interview Preparation
- DSA
- MERN Stack
- Machine Learning
- Artificial Intelligence
- Placements

Always answer in simple English.

Student Question:
${question}
`;

    const result = await model.generateContent(prompt);

    const answer = result.response.text();

    res.status(200).json({
      success: true,
      answer,
    });

  } catch (error) {
    console.error("AI Error:", error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  chatWithAI,
};