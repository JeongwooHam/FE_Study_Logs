import type { PostType } from "@/_type";
import { fetchPosts } from "@/apis";
import React from "react";
import Post from "./one-post";

async function PostList() {
  const postList: PostType[] = await fetchPosts();

  console.log("post", postList);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>😊 This is a PostList page</h1>
      <div>
        {postList?.map((post: PostType) => (
          <p key={post.id} className="text-base">
            <Post post={post} />
          </p>
        ))}
      </div>
    </div>
  );
}

export default PostList;
