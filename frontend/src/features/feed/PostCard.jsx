export default function PostCard({ post }) {
  return (
    <div style={{ border: "1px solid #ddd", borderRadius: 8, padding: 12, marginBottom: 12 }}>
      <strong>{post.author}</strong>
      <small style={{ marginLeft: 8, color: "#777" }}>
        {new Date(post.createdAt).toLocaleString()}
      </small>
      <p>{post.content}</p>
      {/* Caroline's comments section goes here */}
    </div>
  );
}
