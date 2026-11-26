import { useState } from "react";

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
        onChange={(e) => setText(e.target.value)}
        placeholder="Share something with the community..."
        rows={3}
        style={{ width: "100%", padding: 8, boxSizing: "border-box" }}
      />
      <button onClick={handleSubmit}>Post</button>
    </div>
  );
}
