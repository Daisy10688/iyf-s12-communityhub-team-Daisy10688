import { useState } from "react";
import { mockPosts } from "./mockPosts";
import PostCard from "./PostCard";
import CreatePost from "./CreatePost";

export default function FeedPage() {
  const [posts, setPosts] = useState(mockPosts);

  const addPost = (content) => {
    const newPost = {
      id: Date.now(),
      author: "You",
      content,
      createdAt: new Date().toISOString(),
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 16 }}>
      <h2>Community Feed</h2>
      <CreatePost onPost={addPost} />
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
