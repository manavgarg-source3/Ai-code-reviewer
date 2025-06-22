import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import "prismjs/components/prism-javascript"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"
import "highlight.js/styles/github-dark.css"
import axios from 'axios'
import './App.css'

function App() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1
}`)
  const [review, setReview] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    prism.highlightAll()
  }, [])

  async function reviewCode() {
    setLoading(true)
    setReview("") // clear old review while loading

    try {
      const response = await axios.post('http://localhost:3000/ai/get-review', { code })
      if (response.data.success) {
        setReview(response.data.feedback)
      } else {
        setReview("❌ Failed to generate review.")
      }
    } catch (err) {
      setReview("❌ Server error. Please try again. or check u have given code or not")
    }

    setLoading(false)
  }

  return (
    <main>
      {/* LEFT: Code Editor */}
      <div className="left">
        <h2>Write your code:</h2>
        <div className="code">
          <Editor
            value={code}
            onValueChange={setCode}
            highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
              backgroundColor: "#121212",
              height: "100%",
              width: "100%",
              color: "#fff",
              overflow: "auto"
            }}
          />
        </div>
        <div
          onClick={reviewCode}
          className={`review ${loading ? 'disabled' : ''}`}
        >
          {loading && <div className="spinner"></div>}
          {loading ? "Reviewing..." : "Review Code"}
        </div>
      </div>

      {/* RIGHT: Output */}
      <div className="right">
        <h2>AI Code Review:</h2>
        <Markdown rehypePlugins={[rehypeHighlight]}>
          {typeof review === "string" ? review : "❌ Invalid review format."}
        </Markdown>
      </div>
    </main>
  )
}

export default App
