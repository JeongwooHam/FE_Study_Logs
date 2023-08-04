import React, {
  Dispatch,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";

interface PostType {
  id: number;
  content: string;
  liked: number;
}

interface UserInformation {
  name: string;
  post: PostType[];
}

interface ActionType {
  type: string;
  payload: {
    name?: string;
    id?: number;
    content?: string;
  };
}

const initialState = {
  name: "Jane",
  post: [
    { id: 1, content: "안녕하세요", liked: 1 },
    { id: 2, content: "Hello:)", liked: 5 },
  ],
};

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

type PostActions = addLikeAction | addContentAction;

export const GlobalPost = createContext<
  [UserInformation, Dispatch<PostActions>]
>([initialState, () => {}]);

export const usePostContext = () => useContext(GlobalPost);

export const reducer = (
  state: UserInformation,
  action: ActionType
): UserInformation => {
  switch (action.type) {
    case "addLike": {
      let new_state = { ...state };
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
        let new_state = { ...state };
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
