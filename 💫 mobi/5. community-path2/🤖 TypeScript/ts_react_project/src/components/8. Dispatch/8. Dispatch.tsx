import React from "react";

import { ActionTypes, usePostContext } from "./StateContext";

const UserPage: React.FC = () => {
  const [postState, dispatch] = usePostContext();

  const handleLike = (id: number) => {
    dispatch({ type: ActionTypes.addLike, payload: { id } });
  };

  return (
    <div>
      <div>{postState.name}의 게시물</div>
      <div>
        {postState.post.map((post) => (
          <>
            <div>
              {post.content} ({post.liked})
            </div>
            <button onClick={() => handleLike(post.id)}>공감하기</button>
          </>
        ))}
      </div>
    </div>
  );
};

export default UserPage;
