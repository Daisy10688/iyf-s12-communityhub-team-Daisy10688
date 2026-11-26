import { useState } from "react";

const MAX = 500;

export default function CreatePost({ onPost }) {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;
    onPost(text.trim());
    setText("");
  };

  return (
    <div style={{ marginBottom: 16 }}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value.slice(0, MAX))}
        placeholder="Share something with the community..."
        rows={3}
        style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={handleSubmit} disabled={!text.trim()}>
          Post
        </button>
        <small style={{ color: text.length >= MAX ? "red" : "#777" }}>
          {text.length}/{MAX}
        </small>
      </div>
    </div>
  );
}
