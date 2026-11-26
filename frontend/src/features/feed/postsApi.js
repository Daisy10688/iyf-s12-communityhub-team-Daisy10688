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

// Later: replace with PUT and DELETE calls to Shanizz's API
export async function updatePost(id, content) {
  return { id, content };
}

export async function deletePost(id) {
  return id;
}
