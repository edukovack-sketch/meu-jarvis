require('dotenv').config();
const express = require('express');
const { OpenAI } = require('openai');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static('public')); // Servirá o seu site HTML

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post('/perguntar-jarvis', async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "Você é o JARVIS. Responda como o assistente do Homem de Ferro, chame o usuário de Senhor." },
        { role: "user", content: prompt }
      ],
    });
    res.json({ resposta: response.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Jarvis operacional na porta ${PORT}`));
