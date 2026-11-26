import { useState, useEffect } from "react";
import { getPosts, createPost, updatePost, deletePost } from "./postsApi";
import PostCard from "./PostCard";
import CreatePost from "./CreatePost";

export default function FeedPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .catch(() => setError("Could not load posts."))
      .finally(() => setLoading(false));
  }, []);

  const addPost = async (content) => {
    try {
      const newPost = await createPost(content);
      setPosts([newPost, ...posts]);
      setError("");
    } catch {
      setError("Could not post, try again.");
    }
  };

  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts(posts.filter((p) => p.id !== id));
  };

  const handleEdit = async (id, content) => {
    await updatePost(id, content);
    setPosts(posts.map((p) => (p.id === id ? { ...p, content } : p)));
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 16 }}>
      <h2>Community Feed</h2>
      <CreatePost onPost={addPost} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading && <p>Loading posts...</p>}
      {!loading && posts.length === 0 && <p>No posts yet, be the first!</p>}
      {posts.map((post) => (
        <PostCard key={post.id} post={post} currentUser="You" onDelete={handleDelete} onEdit={handleEdit} />
      ))}
    </div>
  );
}
