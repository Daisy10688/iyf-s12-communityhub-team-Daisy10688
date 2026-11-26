import { useState } from "react";
import LikeButton from "./LikeButton";

function SharedLikes() {
  const [likes, setLikes] = useState(0);

  return (
    <div>
      <h2>CommunityHub Likes</h2>

      <LikeButton
        likes={likes}
        onLike={() => setLikes(likes + 1)}
      />

      <LikeButton
        likes={likes}
        onLike={() => setLikes(likes + 1)}
      />
    </div>
  );
}

export default SharedLikes;