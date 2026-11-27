import { useState } from "react";

export default function CommentForm({ postId, onSubmit }) {
  const [text, setText] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    if (!text.trim()) {
      setError("Please write a comment first.");
      return;
    }
    setSubmitting(true);
    setError("");
    try {
      await onSubmit(text.trim());
      setText("");
    } catch (err) {
      setError(err.message || "Could not post comment.");
    } finally {
      setSubmitting(false);
    }
  }

  const inputId = `comment-input-${postId}`;

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={inputId} style={{ fontSize: 14 }}>Add a comment</label>
      <textarea
        id={inputId}
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={submitting}
        rows={2}
        style={{ display: "block", width: "100%", boxSizing: "border-box", padding: 8, margin: "4px 0", fontSize: 16 }}
      />
      {error && <p role="alert" style={{ color: "#c92a2a", margin: "4px 0" }}>{error}</p>}
      <button
        type="submit"
        disabled={submitting}
        style={{ background: "#d6336c", color: "#fff", border: "none", borderRadius: 6, padding: "10px 16px", minHeight: 44, cursor: "pointer" }}
      >
        {submitting ? "Posting..." : "Comment"}
      </button>
    </form>
  );
}