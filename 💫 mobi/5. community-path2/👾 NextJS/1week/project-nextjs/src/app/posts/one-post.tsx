import { PostType } from "@/_type";
import React from "react";

interface Props {
  post: PostType;
}

const Post = ({ post }: Props) => {
  const { id, userId, title, body } = post;

  return (
    <div style={{ borderBottom: "1px solid #e2e2e2" }}>
      <h3>{title}</h3>
      <div>글 번호 : {id}</div>
      <div>사용자 : {userId}</div>
      <div>내용 : {body}</div>
    </div>
  );
};

export default Post;
