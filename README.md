[README.md](https://github.com/user-attachments/files/27168064/README.md)
# JARVIS - Assistente IA

Uma interface web para interagir com o JARVIS, inspirado no assistente do Homem de Ferro.

## Como usar

1. Obtenha uma chave da API da OpenAI em [https://platform.openai.com/api-keys](https://platform.openai.com/api-keys).

2. Edite o arquivo `.env` e adicione sua chave:
   ```
   OPENAI_API_KEY=sua_chave_aqui
   ```

3. Instale as dependências:
   ```
   npm install
   ```

4. Inicie o servidor:
   ```
   npm start
   ```

5. Abra o navegador em `http://localhost:3000` e converse com o JARVIS!

## Funcionalidades

- Interface web simples e futurista
- Respostas em português como o JARVIS
- Suporte a GPT-4o da OpenAI

## Estrutura do projeto

- `server.js`: Backend Node.js com Express e OpenAI
- `public/index.html`: Frontend HTML/CSS/JS
- `.env`: Arquivo de configuração (não versionado)
