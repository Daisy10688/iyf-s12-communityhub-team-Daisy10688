const store = {};

export async function getComments(postId) {
  return store[postId] || [];
}

export async function createComment(postId, content, author = "You") {
  const comment = {
    id: Date.now(),
    author,
    content,
    createdAt: new Date().toISOString(),
  };
  store[postId] = [...(store[postId] || []), comment];
  return comment;
}