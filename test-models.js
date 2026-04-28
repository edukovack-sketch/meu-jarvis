require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function listModels() {
  try {
    const models = await genAI.listModels();
    console.log('Modelos disponíveis:');
    models.forEach(model => console.log(model.name));
  } catch (error) {
    console.error('Erro:', error.message);
  }
}

listModels();