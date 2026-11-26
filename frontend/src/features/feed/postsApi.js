import { mockPosts } from "./mockPosts";

// Later: replace these with fetch calls to Shanizz's API
export async function getPosts() {
  return mockPosts;
}

export async function createPost(content) {
  return {
    id: Date.now(),
    author: "You",
    content,
    createdAt: new Date().toISOString(),
  };
}
