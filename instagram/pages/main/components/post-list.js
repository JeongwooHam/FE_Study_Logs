import OnePost from "./one-post";
import postList from "../../../data/post-list.json";

const PostList = () => {
  return (
    <>
      {postList.posts.map((post) => (
        <OnePost post={post} key={post.id} />
      ))}
    </>
  );
};

export default PostList;
