import { useState } from "react";
import styled from "styled-components";
import Comment from "../../components/2.state/comment";

function State2() {
  const [user, setUser] = useState("");
  const [content, setContent] = useState("");
  const [post, setPost] = useState({
    title: "안녕하세요 여러분 김성용 강사입니다 :)",
    content: "오늘도 모두 화이팅입니다!",
    User: {
      nickname: "김성용",
      age: 20,
      height: 190,
    },
    Comments: [
      {
        User: {
          nickname: "김사과",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
      {
        User: {
          nickname: "반하나",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
      {
        User: {
          nickname: "오렌지",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
      {
        User: {
          nickname: "이멜론",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
      {
        User: {
          nickname: "박수박",
        },
        content: "오늘도 화이팅입니다!",
        myComment: false,
      },
    ],
  });

  // console.log({ ...post });
  const handleUserVal = (e) => {
    setUser(e.target.value);
  };
  const handleContentVal = (e) => {
    setContent(e.target.value);
  };

  const onAddComment = () => {
    const newComment = {
      User: { nickname: `${user}` },
      content: `${content}`,
      myComment: true,
    };

    const newPost = { ...post };
    newPost.Comments.push(newComment);

    console.log(newPost);

    setPost(newPost);
  };

  const handleEditPost = (id, changedContent) => {
    console.log(id);
    console.log(content);

    // 수정한 값이 있을 때만!
    if (changedContent) {
      const newPost = { ...post };
      newPost.Comments[id].content = changedContent;

      setPost(newPost);
    }
  };

  const handleDeletePost = (id) => {
    console.log(id);

    const newPost = { ...post };
    newPost.Comments = newPost.Comments.filter(
      (comment, _, arr) => arr.indexOf(comment) !== id
    );

    // console.log(newPost);

    setPost(newPost);
  };

  return (
    <S.Wrapper>
      <h1>문제2</h1>
      <S.PostBox>
        <S.PostTitle>제목: {post.title}</S.PostTitle>
        <S.PostContent>내용: {post.content}</S.PostContent>
      </S.PostBox>
      <S.PostInfo>
        <p>
          작성자: <span>{post.User.nickname}</span>
        </p>
        <p>
          작성자 나이: <span>{post.User.age}</span>
        </p>
        <p>
          작성자 키: <span>{post.User.height}</span>
        </p>
      </S.PostInfo>
      <div>
        <p>
          댓글 수: <span>{post.Comments.length}</span>
        </p>
        <input placeholder="작성자" onChange={handleUserVal} />
        <input placeholder="댓글 내용" onChange={handleContentVal} />
        <button onClick={onAddComment}>댓글 작성</button>
      </div>
      <S.CommentList>
        {post.Comments.map((comment, i) => (
          <Comment
            key={i}
            Key={i}
            comment={comment}
            onEdit={handleEditPost}
            onDelete={() => {
              handleDeletePost(i);
            }}
          />
        ))}
      </S.CommentList>
    </S.Wrapper>
  );
}
export default State2;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PostBox = styled.div`
  background-color: #999;
  width: 360px;
  padding: 10px;
`;

const PostTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const PostContent = styled.p`
  color: #fff;
`;

const PostInfo = styled.div`
  width: 360px;
  border: 3px solid #f00;
  padding: 10px;
  margin: 10px;

  p {
    display: flex;
    justify-content: space-around;
  }

  span {
    font-weight: bold;
  }
`;

const CommentList = styled.ul`
  width: 960px;
`;

const S = {
  Wrapper,
  PostBox,
  PostTitle,
  PostContent,
  PostInfo,
  CommentList,
};
