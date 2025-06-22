# 💡 AI Code Reviewer

An intelligent AI-powered code reviewer that analyzes your JavaScript code using **Google Gemini (Generative AI)** and provides professional feedback with suggested improvements, best practices, readability, scalability, and more.

---

## 🚀 Features

- ✅ Smart AI-based code reviews
- 🎯 Follows real-world best practices (DRY, SOLID, etc.)
- 🧠 Trained system prompt for expert-level suggestions
- 📜 Markdown-rendered feedback with syntax highlighting
- ⏳ Loading spinner during review
- ⚡ Clean UI using custom CSS (no Tailwind)

---

## 📦 Tech Stack

- **Frontend:** React, PrismJS, React Markdown, Axios
- **Backend:** Node.js, Express.js
- **AI Engine:** Google Gemini (Generative AI SDK)
- **Styling:** Plain CSS

---

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
 git clone https://github.com/yourusername/ai-code-reviewer.git
 cd ai-code-reviewer

Install Dependencies
cd frontend
npm install

For Backend:
cd ../backend
npm install

Environment Setup
In /backend/.env file, add:
env

GOOGLE_GEMINI_KEY=your_google_gemini_api_key_here
PORT=3000