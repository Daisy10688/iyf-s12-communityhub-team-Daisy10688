
function PostCard({ post, onLike, onDelete }) {
  const date = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <article className="post-card">
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <div className="post-meta">
        <span>By {post.author}</span>
        <span>{date}</span>
      </div>
      <div className="post-actions">
        <button type="button" onClick={() => onLike(post.id)}>
          ❤️ {post.likes}
        </button>
        <button type="button" onClick={() => onDelete(post.id)}>
          Delete
        </button>
      </div>
    </article>
  );
}

export default PostCard;