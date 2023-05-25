import { useState } from "react";
import styled from "styled-components";

function Comment(props) {
  const { Key, comment, onEdit, onDelete } = props;

  // console.log(comment);
  // console.log(onEdit);
  // console.log(onDelete);

  const { User, content, myComment } = comment;

  // console.log(comment);
  // console.log(User);
  // console.log(content);

  const [isEditMode, setIsEditMode] = useState(false);
  const [changedContent, setChangedContent] = useState("");

  const handleInputVal = (e) => {
    setChangedContent(e.target.value);
  };

  const handleIsEditMode = () => {
    // 수정 모드 값이 false > true가 되면 input 창이 보이도록
    if (!isEditMode) return setIsEditMode(true);
    // 수정 모드 값을 true > false로 바꿔서 값을 업데이트하고 input 창이 닫히도록
    onEdit(Key, changedContent);
    setIsEditMode(false);
  };

  return (
    <div>
      <S.CommentItem>
        <p>작성자: {User.nickname}</p>
        <p>
          댓글내용:{" "}
          {isEditMode ? <input onChange={handleInputVal}></input> : content}
        </p>
        <button onClick={handleIsEditMode}>수정</button>
        {myComment && <button onClick={onDelete}>삭제</button>}
      </S.CommentItem>
    </div>
  );
}
export default Comment;

const CommentItem = styled.li`
  border: 1px solid #000;
  margin: 10px;
  list-style: none;
`;

const S = {
  CommentItem,
};
