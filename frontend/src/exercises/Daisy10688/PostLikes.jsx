import { useState } from "react";

function Post({ title, likes, onLike }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>Likes: {likes}</p>
      <button onClick={onLike}>Like ❤️</button>
    </div>
  );
}

function PostLikes() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Welcome to CommunityHub!", likes: 0 },
    { id: 2, title: "Learning React is fun!", likes: 0 },
  ]);

  function handleLike(id) {
    setPosts(
      posts.map((post) =>
        post.id === id
          ? { ...post, likes: post.likes + 1 }
          : post
      )
    );
  }

  return (
    <div>
      <h2>Post Likes Exercise</h2>

      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          likes={post.likes}
          onLike={() => handleLike(post.id)}
        />
      ))}
    </div>
  );
}

export default PostLikes;