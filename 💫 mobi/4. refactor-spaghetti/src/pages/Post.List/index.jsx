import axios from "axios";
import { useEffect, useState } from "react";
import { DialLogState, useDiaLogStore } from "../../contexts/DiaLogProvider";
import { useSearchParams } from "react-router-dom";
import Pagination from "../../components/pagination";
import { PostApi } from "../../apis/post";
import { IsUserName } from "../../utils/isUserName";
import Dialog from "../../components/Dialog";

const LIMIT_TAKE = 10;
const PostListPage = () => {
  const [params] = useSearchParams();
  const [postList, setPostList] = useState([]);
  const { dispatch, OpenDialog } = useDiaLogStore();

  const fetchPostList = async () => {
    const response = await PostApi.getList({
      target: "posts",
      params: {
        take: params.get("take") ?? LIMIT_TAKE,
      },
    });
    setPostList(response.data.Posts);
  };

  useEffect(() => {
    IsUserName();
  }, []);

  useEffect(() => {
    fetchPostList();
  }, [params]);

  const onClickPost = (postId) => {
    console.log("post clicked");
    OpenDialog();
    dispatch({
      type: DialLogState.CONFIRM,
      payload: {
        text: "정말로 페이지를 이동하겠습니까",
        postId,
      },
    });
  };

  return (
    <>
      <table>
        <caption>Post List Page</caption>
        <tr>
          <th>제목</th>
          <th>내용</th>
          <th>작성자</th>
        </tr>
        {postList.map((post) => (
          <tr key={post.id} onClick={() => onClickPost(post.id)}>
            <td>{post.title}</td>
            <td>{post.content}</td>
            <td>{post.User.nickName}</td>
          </tr>
        ))}
      </table>
      <Pagination target={"posts"} />
      <Dialog />
    </>
  );
};
export default PostListPage;
