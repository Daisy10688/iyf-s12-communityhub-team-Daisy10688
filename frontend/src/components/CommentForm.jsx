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
      <label htmlFor={inputId} className="comment-form__label">Add a comment</label>
      <textarea
        id={inputId}
        className="comment-form__input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={submitting}
        rows={2}
      />
      {error && <p role="alert" className="comments__status comments__status--error">{error}</p>}
      <button type="submit" className="comment-form__button" disabled={submitting}>
        {submitting ? "Posting..." : "Comment"}
      </button>
    </form>
  );
}