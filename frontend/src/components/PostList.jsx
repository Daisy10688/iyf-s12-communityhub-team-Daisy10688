import PostCard from "./PostCard";

const samplePosts = [
  { id: 1, title: "First Post", excerpt: "Welcome to CommunityHub.", author: "Alice", date: "Jan 15" },
  { id: 2, title: "Second Post", excerpt: "Props make components reusable.", author: "Bob", date: "Jan 14" },
  { id: 3, title: "Third Post", excerpt: "Keys help React track list items.", author: "Charlie", date: "Jan 13" },
];

function PostList({ posts = samplePosts }) {
  if (posts.length === 0) {
    return <p>No posts found.</p>;
  }

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          excerpt={post.excerpt}
          author={post.author}
          date={post.date}
        />
      ))}
    </div>
  );
}

export default PostList;