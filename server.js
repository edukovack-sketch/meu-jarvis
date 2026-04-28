require('dotenv').config();
const express = require('express');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const cors = require('cors');
const path = require('path');

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Validação da chave da API no startup
if (!process.env.GEMINI_API_KEY) {
  console.error('❌ ERRO: GEMINI_API_KEY não encontrada no arquivo .env');
  console.error('📝 Adicione sua chave do Google AI Studio no arquivo .env');
  console.error('🔗 Obtenha em: https://makersuite.google.com/app/apikey');
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Função auxiliar para testar a API
async function testAPI() {
  const model = genAI.getGenerativeModel({ model: "models/gemini-1.0-pro" });
  await model.generateContent("Teste");
}

// Teste da chave da API no startup
async function testAPIKey() {
  try {
    await testAPI();
    console.log('✅ Chave da API Gemini validada com sucesso');
  } catch (error) {
    if (error.status === 400 || error.message.includes('API_KEY')) {
      console.error('❌ ERRO: Chave da API Gemini inválida');
      console.error('🔑 Verifique se a chave está correta no arquivo .env');
    } else if (error.status === 429) {
      console.warn('⚠️ AVISO: Quota da API Gemini excedida');
    } else {
      console.error('❌ ERRO ao validar chave da API:', error.message);
    }
  }
}

app.post('/perguntar-jarvis', async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt || prompt.trim().length === 0) {
      return res.status(400).json({ error: 'Mensagem não pode estar vazia' });
    }

    // Modelo Gemini 1.0 Pro (Rápido e eficiente)
    const model = genAI.getGenerativeModel({
      model: "models/gemini-1.0-pro",
      systemInstruction: "Seu nome é JARVIS. Você é o assistente virtual inteligente do Senhor. É especialista em programação, saúde, pesquisa e renda online. Responda de forma elegante, útil e com personalidade, sempre tratando o usuário como 'Senhor'. Mantenha um tom profissional mas amigável."
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.json({ resposta: text });
  } catch (error) {
    console.error('Erro na API Gemini:', error);

    if (error.status === 400) {
      res.status(400).json({ error: 'Erro na requisição. Verifique o formato da mensagem.' });
    } else if (error.status === 403 || error.message.includes('API_KEY')) {
      res.status(401).json({ error: 'Chave da API Gemini inválida ou expirada' });
    } else if (error.status === 429) {
      res.status(429).json({ error: 'Quota da API Gemini excedida. Tente novamente mais tarde.' });
    } else if (error.status === 500) {
      res.status(500).json({ error: 'Erro interno do servidor Gemini. Tente novamente.' });
    } else {
      res.status(500).json({ error: 'Erro interno do servidor. Tente novamente.' });
    }
  }
});

// Endpoint para verificar status da API
app.get('/status', async (req, res) => {
  try {
    await testAPI();
    res.json({ status: 'online', message: 'API Gemini operacional' });
  } catch (error) {
    console.error('Erro no status da API:', error);
    res.status(500).json({ status: 'offline', message: 'API Gemini offline ou chave inválida' });
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 JARVIS operacional na porta ${PORT}`);
  console.log(`🌐 Acesse: http://localhost:${PORT}`);
  console.log(`🤖 Usando: Google Gemini 1.0 Pro (API Gratuita)`);
});