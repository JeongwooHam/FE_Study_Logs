import React, {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";

// useContext, useReducer로 관리할 상태의 타입 정의
interface PostType {
  id: number;
  content: string;
  liked: number;
}

interface UserInformation {
  name: string;
  post: PostType[];
}

const initialState = {
  name: "Jane",
  post: [
    { id: 1, content: "안녕하세요", liked: 1 },
    { id: 2, content: "Hello:)", liked: 5 },
  ],
};

// dispatch에 전달할 action의 타입 정의
interface ActionType {
  type: string;
  payload: {
    name?: string;
    id?: number;
    content?: string;
  };
}

// 각 타입을 열거형으로 정의. 상수처럼 사용할 수 있게 함
export enum ActionTypes {
  addLike = "addLike",
  addContent = "addContent",
}

type addLikeAction = {
  type: typeof ActionTypes.addLike;
  payload: {
    id: number;
  };
};

type addContentAction = {
  type: typeof ActionTypes.addContent;
  payload: {
    id: number;
    content: string;
  };
};

// 각각 특정한 payload 타입을 가지는 액션의 타입 union
type PostActions = addLikeAction | addContentAction;

// 전역으로 관리할 상태와 상태 변경 시 사용할 dispatch를 갖는 context
// 초기값으로 설정 후 globalpostprovider에서 실제 값 제공
export const GlobalPost = createContext<
  [UserInformation, Dispatch<PostActions>]
>([initialState, () => {}]);

// 전역으로 해당 context를 사용할 수 있게 하는 커스텀 훅
export const usePostContext = () => useContext(GlobalPost);

export const reducer = (
  state: UserInformation,
  action: ActionType
): UserInformation => {
  switch (action.type) {
    case "addLike": {
      const new_state = { ...state };
      const TargetPost = new_state.post.findIndex(
        (post) => post.id === action.payload.id
      );
      if (TargetPost >= 0) {
        const UpdatedPost = { ...new_state.post[TargetPost] };
        UpdatedPost.liked += 1;

        new_state.post[TargetPost] = UpdatedPost;
      }
      return new_state;
    }
    case "addContent": {
      if (action.payload.content) {
        const new_state = { ...state };
        const newPost: PostType = {
          id: Math.floor(Math.random() * 10000),
          content: action.payload.content,
          liked: 0,
        };
        new_state.post.push(newPost);
        return new_state;
      }
    }
    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
};

export const GlobalPostProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [postState, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalPost.Provider value={[postState, dispatch]}>
      {children}
    </GlobalPost.Provider>
  );
};
