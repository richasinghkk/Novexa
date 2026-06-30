const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

// ================= Generate Interview Question =================

const generateQuestion = async (req, res) => {
  try {
    const interviewType = req.body?.interviewType;

    if (!interviewType) {
      return res.status(400).json({
        success: false,
        message: "Interview type is required",
      });
    }

    const prompt = `
You are a senior interviewer at a top product-based company like Google, Microsoft, Amazon, or Adobe.

Generate ONE interview question for a ${interviewType} interview.

Rules:
- Return ONLY the interview question.
- Do NOT provide an answer.
- Make it suitable for a final-year engineering student.
- The question should be realistic and commonly asked.
`;

    const result = await model.generateContent(prompt);

    const question = result.response.text().trim();

    res.status(200).json({
      success: true,
      question,
    });

  } catch (error) {
    console.error("Generate Question Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to generate interview question.",
    });
  }
};

// ================= Evaluate Answer =================

const evaluateAnswer = async (req, res) => {
  try {
    const interviewType = req.body?.interviewType;
    const question = req.body?.question;
    const answer = req.body?.answer;

    if (!question || !answer) {
      return res.status(400).json({
        success: false,
        message: "Question and answer are required.",
      });
    }

    const prompt = `
You are a senior technical interviewer.

Interview Type:
${interviewType}

Interview Question:
${question}

Candidate Answer:
${answer}

Evaluate the answer.

Return your response using this exact format:

Overall Score: X/10

Technical Accuracy:
(2-3 lines)

Communication:
(2-3 lines)

Confidence:
(2-3 lines)

Strengths:
• Point 1
• Point 2

Weaknesses:
• Point 1
• Point 2

Suggestions for Improvement:
• Point 1
• Point 2

Be constructive and encouraging.
`;

    const result = await model.generateContent(prompt);

    const feedback = result.response.text().trim();

    res.status(200).json({
      success: true,
      feedback,
    });

  } catch (error) {
    console.error("Evaluation Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to evaluate interview answer.",
    });
  }
};

module.exports = {
  generateQuestion,
  evaluateAnswer,
};