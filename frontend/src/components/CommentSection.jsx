import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import { getComments, createComment } from "./commentsApi";

export default function CommentSection({ postId }) {
  const { user, isAuthenticated } = useAuth();
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        setComments(await getComments(postId));
      } catch {
        setError("Could not load comments.");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [postId]);

  async function handleAdd(content) {
    const newComment = await createComment(postId, content, user.name);
    setComments([...comments, newComment]);
  }

  return (
    <div style={{ marginTop: 12 }}>
      <CommentList comments={comments} loading={loading} error={error} />
      {isAuthenticated ? (
        <CommentForm postId={postId} onSubmit={handleAdd} />
      ) : (
        <p style={{ color: "#777" }}>Log in to join the conversation.</p>
      )}
    </div>
  );
}