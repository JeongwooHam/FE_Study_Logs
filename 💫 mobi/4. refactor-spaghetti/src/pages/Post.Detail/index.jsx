import { useEffect } from "react";
import { PostApi } from "../../apis/post";
import { IsUserName } from "../../utils/isUserName";
import CommentList from "./components/commentList";
import useFetch from "../../hooks/useFetch";

const PostDetailPage = () => {
  const { data: postDetail } = useFetch(PostApi.getPostDetail);

  useEffect(() => {
    IsUserName();
  }, []);

  return (
    <div>
      <h1>Post Detail Page</h1>
      <div>
        <p>제목: {postDetail?.title}</p>
        <p>내용: {postDetail?.content}</p>
      </div>
      <CommentList />
    </div>
  );
};
export default PostDetailPage;
