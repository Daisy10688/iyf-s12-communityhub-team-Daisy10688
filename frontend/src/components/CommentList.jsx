export default function CommentList({ comments, loading, error }) {
  if (loading) return <p className="comments__status">Loading comments...</p>;

  if (error) {
    return <p role="alert" className="comments__status comments__status--error">{error}</p>;
  }

  if (comments.length === 0) {
    return <p className="comments__status">No comments yet. Be the first to reply.</p>;
  }

  return (
    <ul className="comments__list">
      {comments.map((comment) => (
        <li key={comment.id} className="comments__item">
          <div className="comments__meta">
            <strong className="comments__author">{comment.author}</strong>
            <span className="comments__time">
              {new Date(comment.createdAt).toLocaleString([], {
                day: "numeric",
                month: "short",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
          <p className="comments__text">{comment.content}</p>
        </li>
      ))}
    </ul>
  );
}