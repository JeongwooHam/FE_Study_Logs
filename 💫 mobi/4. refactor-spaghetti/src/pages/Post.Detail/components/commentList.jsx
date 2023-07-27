import { useEffect, useState } from "react";
import { PostApi } from "../../../apis/post";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../../components/pagination";
import { styled } from "styled-components";
import useFetch from "../../../hooks/useFetch";

const LIMIT_TAKE = 20;
const CommentList = () => {
  const [params] = useSearchParams();
  const [isOpenCommentList, setIsOpenCommentList] = useState(false);

  const { data, loading, error } = useFetch(
    PostApi.getList,
    {
      target: "comments",
      params: {
        take: params.get("take") ?? LIMIT_TAKE,
      },
    },
    params
  );
  const commentList = data?.Comments;

  useEffect(() => {
    if (!isOpenCommentList) return;
  }, [params, isOpenCommentList]);

  return (
    <>
      <button onClick={() => setIsOpenCommentList((prev) => !prev)}>
        {isOpenCommentList ? "댓글 숨기기" : "댓글 보기"}
      </button>
      {isOpenCommentList && (
        <>
          {commentList?.map((comment) => (
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
    </>
  );
};

export default CommentList;

const Comment = styled.div`
  border-bottom: 1px solid lightgray;
  padding: 10px;
  span {
    font-weight: bold;
  }
`;

const S = { Comment };
