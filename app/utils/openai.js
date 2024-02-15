import axios from "axios";

const openaiApiKey = "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";

const askOpenAI = async (question) => {
  const response = await axios.post(
    "https://api.openai.com/v1/engines/gpt-3.5-turbo/completions",
    {
      prompt: question,
      max_tokens: 150,
      temperature: 0.7,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${openaiApiKey}`,
      },
    }
  );

  return response.data.choices[0].text.trim();
};

export default askOpenAI();
