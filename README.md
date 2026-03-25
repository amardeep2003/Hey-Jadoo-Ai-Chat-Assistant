# AI-Chat-Assistant-Hey-Jadoo-
A full-stack AI Chat Assistant inspired by "Jadoo" 👽 from Koi Mil Gaya. Built using React (frontend) and Node.js + Express (backend), powered by Groq API. The app provides real-time conversational responses with a unique personality, smooth typing effect, and modern UI.


# 👽 Hey Jadoo – AI Chat Assistant

A fun and interactive AI chat application where the assistant behaves like **Jadoo 👽 from Koi Mil Gaya / Krrish universe**.

This project is a full-stack application built using **React (Frontend)** and **Node.js + Express (Backend)**, powered by **Groq LLM API**.

---

## 🚀 Live Demo

🌐 Frontend: https://hey-jadoo-ai-chat-assistant.netlify.app
⚙️ Backend: https://hey-jadoo-ai-chat-assistant.onrender.com

---

## ✨ Features

* 👽 Jadoo Personality-based AI responses
* 💬 Real-time chat interface
* ⌨️ Typing animation (character-by-character response)
* ⚡ Fast responses using Groq API
* 🎨 Clean and modern UI
* 🔄 Model selection (Llama, Gemma etc.)
* 🧠 Context-aware conversation (last messages memory)
* ❌ No database – fresh chat every time

---

## 🧱 Tech Stack

### Frontend

* React
* Vite
* CSS (custom styling)
* Netlify (Deployment)

### Backend

* Node.js
* Express.js
* Groq SDK
* Render (Deployment)

---

## 📁 Project Structure

```
Ai Chat Assistant React Based Project/
│
├── client/   # Frontend (React App)
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── .env
│
├── server/   # Backend (Express API)
│   ├── server.js
│   ├── package.json
│   └── .env
```

---

## ⚙️ Environment Variables

### 🔹 Frontend (.env)

```env
VITE_API_BASE=https://your-backend-url.onrender.com/api
```

👉 Example:

```env
VITE_API_BASE=https://hey-jadoo-ai-chat-assistant.onrender.com/api
```

---

### 🔹 Backend (.env)

```env
GROQ_API_KEY=your_groq_api_key_here
PORT=3001
```

👉 Example:

```env
GROQ_API_KEY=gsk_xxxxxxxxxxxxxxxxxxxxx
PORT=3001
```


---

## 🧠 How It Works

1. User sends a message from frontend
2. Request goes to backend `/api/chat`
3. Backend adds **Jadoo system prompt**
4. Message is sent to Groq LLM
5. AI generates response in Jadoo style 👽
6. Response sent back to frontend
7. Typing animation displays the reply

---

## 🛠️ Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
npm run dev
```

---

### 3️⃣ Setup Frontend

```bash
cd client
npm install
npm run dev
```

---

## 🚀 Deployment

### Frontend (Netlify)

* Build command: `npm run build`
* Publish directory: `dist`

### Backend (Render)

* Root directory: `server`
* Start command: `npm start`
* Add environment variables in Render dashboard

---

## 🔐 Important Notes

* `.env` files are NOT pushed to GitHub
* API keys should always remain private
* CORS must be configured properly in backend

---

## 💡 Future Improvements

* Chat history (localStorage / database)
* Voice input 🎤
* Multiple AI personalities
* Authentication system
* Mobile optimization

---

## 🙌 Acknowledgements

* Groq API for ultra-fast LLM responses
* Inspired by Jadoo from Koi Mil Gaya 💙

---

## 👨‍💻 Author

Amardeep kumar Sahu

---

## ⭐ If you like this project

Give it a star ⭐ on GitHub and share it!
