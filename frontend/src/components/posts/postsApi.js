import { mockPosts } from "./mockPosts";

// Set to false when Shanizz's API is running
const USE_MOCK = true;
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) throw new Error("Request failed");
  return res.json();
}

export async function getPosts() {
  if (USE_MOCK) return mockPosts;
  return request("/api/posts");
}

export async function createPost(content) {
  if (USE_MOCK) {
    return {
      id: Date.now(),
      author: "You",
      content,
      createdAt: new Date().toISOString(),
    };
  }
  return request("/api/posts", {
    method: "POST",
    body: JSON.stringify({ content }),
  });
}

export async function updatePost(id, content) {
  if (USE_MOCK) return { id, content };
  return request(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({ content }),
  });
}

export async function deletePost(id) {
  if (USE_MOCK) return id;
  await request(`/api/posts/${id}`, { method: "DELETE" });
  return id;
}
