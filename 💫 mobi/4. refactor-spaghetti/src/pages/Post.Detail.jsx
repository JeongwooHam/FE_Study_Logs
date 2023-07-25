import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { styled } from "styled-components";
import Pagination from "../components/pagination";

const LIMIT_TAKE = 20;
const PostDetailPage = () => {
  const [params] = useSearchParams();
  const [postDetail, setPostDetail] = useState([]);
  const [commentList, setCommentList] = useState([]);
  const [isOpenCommentList, setIsOpenCommentList] = useState(false);

  const fetchPostDetail = async () => {
    const response = await axios.get("/api/post");
    setPostDetail(response.data);
  };

  // take 부분은 axiosInstance의 기본 params로 설정할 수 있을듯!
  const fetchComments = async () => {
    const response = await axios.get("/api/comments", {
      params: {
        take: params.get("take") ?? LIMIT_TAKE,
      },
    });
    console.log(response.data);
    setCommentList(response.data.Comments);
  };

  const onClickMoreComments = async () => {
    setIsOpenCommentList(true);
    fetchComments();
  };

  const onClickHiddenComments = () => {
    setIsOpenCommentList(false);
  };

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    if (!userName) {
      alert("로그인이 필요합니다");
      window.location.href = "/";
    }
    fetchPostDetail();
  }, []);

  useEffect(() => {
    if (!isOpenCommentList) return;
    fetchComments();
  }, [params]);

  return (
    <div>
      <h1>Post Detail Page</h1>
      <div>
        <p>제목: {postDetail.title}</p>
        <p>내용: {postDetail.content}</p>
        {!isOpenCommentList && (
          <button onClick={onClickMoreComments}>댓글 보기</button>
        )}
        {isOpenCommentList && (
          <button onClick={onClickHiddenComments}>댓글 숨기기</button>
        )}
        {isOpenCommentList && (
          <>
            {commentList.map((comment) => (
              <S.Comment key={comment.id}>
                <p>
                  <span>Content:</span> {comment.content}
                </p>
                <p>
                  <span>User:</span> {comment.User.nickName}
                </p>
              </S.Comment>
            ))}
            <Pagination target={"comments"} />
          </>
        )}
      </div>
    </div>
  );
};
export default PostDetailPage;

const Comment = styled.div`
  border-bottom: 1px solid lightgray;
  padding: 10px;
  span {
    font-weight: bold;
  }
`;

const S = { Comment };
