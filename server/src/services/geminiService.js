const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

const analyzeResume = async (resumeText) => {
  const prompt = `
You are an expert ATS Resume Reviewer.

Analyze the following resume.

Return your response in simple bullet points.

Mention:
1. Overall resume quality.
2. Strengths.
3. Weaknesses.
4. Missing skills.
5. ATS improvement suggestions.
6. Career advice.

Resume:

${resumeText}
`;

  const result = await model.generateContent(prompt);

  return result.response.text();
};

module.exports = {
  analyzeResume,
};