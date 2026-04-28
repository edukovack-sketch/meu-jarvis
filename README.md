# 🤖 JARVIS - Assistente IA

Uma interface web elegante para interagir com o JARVIS, o assistente inteligente inspirado no Homem de Ferro, powered by Google Gemini.

![JARVIS Interface](https://img.shields.io/badge/JARVIS-Online-brightgreen) ![Node.js](https://img.shields.io/badge/Node.js-18+-blue) ![Google Gemini](https://img.shields.io/badge/Google-Gemini--1.5--Flash-blue)

## ✨ Características

- 🎨 **Interface futurista** inspirada no Homem de Ferro
- 🧠 **IA avançada** usando Google Gemini 1.5 Flash
- 📱 **Design responsivo** para desktop e mobile
- ⚡ **Tempo real** com indicadores de status
- 🛡️ **Tratamento robusto de erros**
- 🔒 **Segurança** com variáveis de ambiente
- 💰 **API Gratuita** do Google AI Studio

## 🚀 Instalação Rápida

### Pré-requisitos
- Node.js 16+ instalado
- Conta no [Google AI Studio](https://makersuite.google.com/app/apikey) (gratuita)

### Passos

1. **Clone ou baixe o projeto**
   ```bash
   git clone https://github.com/seu-usuario/jarvis-ai-assistant.git
   cd jarvis-ai-assistant
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure a API Key**
   - Obtenha sua chave gratuita em [https://makersuite.google.com/app/apikey](https://makersuite.google.com/app/apikey)
   - Edite o arquivo `.env`:
     ```
     GEMINI_API_KEY=sua_chave_do_google_ai_studio
     ```

4. **Inicie o servidor**
   ```bash
   npm start
   ```

5. **Abra no navegador**
   ```
   http://localhost:3000
   ```

## 📖 Uso

- Digite sua mensagem no campo de entrada
- Pressione **Enter** ou clique em **Enviar**
- O JARVIS responderá como o assistente do Homem de Ferro

## 🛠️ Scripts Disponíveis

```bash
npm start      # Inicia o servidor em produção
npm run dev    # Inicia com nodemon para desenvolvimento
```

## 🏗️ Estrutura do Projeto

```
jarvis-ai-assistant/
├── server.js           # Servidor Express
├── public/
│   └── index.html      # Interface web
├── .env               # Variáveis de ambiente (não versionado)
├── .env.example       # Exemplo de configuração
├── .gitignore         # Arquivos ignorados pelo Git
├── package.json       # Dependências e scripts
└── README.md          # Esta documentação
```

## 🔧 Configuração Avançada

### Variáveis de Ambiente

| Variável | Descrição | Padrão |
|----------|-----------|---------|
| `OPENAI_API_KEY` | Chave da API OpenAI | *Obrigatório* |
| `PORT` | Porta do servidor | 3000 |

### Personalização

- **Modelo de IA**: Edite `server.js` linha 32 para mudar o modelo
- **Prompt do sistema**: Modifique o conteúdo do system message
- **Estilos**: Customize o CSS em `public/index.html`

## 🐛 Solução de Problemas

## 🐛 Solução de Problemas

### Erro: "Chave da API inválida"
- Verifique se a chave no `.env` está correta
- Certifique-se de que não há espaços extras
- Teste a chave no [Google AI Studio](https://makersuite.google.com/app/apikey)

### Erro: "Quota excedida"
- O Google Gemini oferece uma cota gratuita generosa
- Se excedeu, aguarde o reset diário ou verifique [Google AI Studio](https://makersuite.google.com/app/apikey)

### Erro: "Porta já em uso"
- Mude a porta no `.env`: `PORT=3001`
- Ou mate o processo usando a porta 3000

### Erro: "Porta já em uso"
- Mude a porta no `.env`: `PORT=3001`
- Ou mate o processo usando a porta 3000

## 🚀 Deploy

### Para produção (exemplo com Vercel)

1. **Instale Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Configure variáveis de ambiente**
   ```bash
   vercel env add OPENAI_API_KEY
   ```

3. **Deploy**
   ```bash
   vercel
   ```

### Outras opções de deploy
- Heroku
- Railway
- Render
- DigitalOcean App Platform

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🙏 Agradecimentos

- Inspirado no JARVIS do universo Marvel
- Powered by [Google Gemini](https://ai.google.dev/)
- Framework [Express.js](https://expressjs.com/)

---

**Desenvolvido com ❤️ para entusiastas de IA e fãs do Homem de Ferro**

## Estrutura do projeto

- `server.js`: Backend Node.js com Express e OpenAI
- `public/index.html`: Frontend HTML/CSS/JS
- `.env`: Arquivo de configuração (não versionado)