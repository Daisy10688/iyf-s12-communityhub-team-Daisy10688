export default function CommentList({ comments, loading, error }) {
  if (loading) return <p>Loading comments...</p>;

  if (error) {
    return <p role="alert" style={{ color: "#c92a2a" }}>{error}</p>;
  }

  if (comments.length === 0) {
    return <p style={{ color: "#777" }}>No comments yet. Be the first to reply.</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0, margin: "8px 0" }}>
      {comments.map((comment) => (
        <li
          key={comment.id}
          style={{ background: "#fff5f8", borderRadius: 8, padding: 10, marginBottom: 8 }}
        >
          <strong>{comment.author}</strong>
          <span style={{ fontSize: 12, color: "#777", marginLeft: 8 }}>
            {new Date(comment.createdAt).toLocaleString([], {
                 day: "numeric",
                 month: "short",
                 hour: "2-digit",
                 minute: "2-digit",
})}
          </span>
          <p style={{ margin: "4px 0 0" }}>{comment.content}</p>
        </li>
      ))}
    </ul>
  );
}