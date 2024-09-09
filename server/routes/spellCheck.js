const express = require("express");
const axios = require("axios");
const spellCheckRouter = express.Router();

spellCheckRouter.post("/", async (req, res) => {
  const { text } = req.body;
  try {
    //call openai
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful assistant that checks and corrects spelling errors in the following sentences. Only return the corrected sentences without any additional comments or context.",
          },
          {
            role: "user",
            content: `${text}`,
          },
        ],
        max_tokens: 200,
        n: 1,
        stop: null,
        temperature: 0.6,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );
    //send back result
    const result = response.data.choices[0].message.content;
    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = spellCheckRouter;
