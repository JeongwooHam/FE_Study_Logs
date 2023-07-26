# 🍝 Refactoring Spaghetti Code!

## 🙃 GOALS

    - Custom Hook, 의존성 주입을 통해 느슨한 관계 만들기
    - 재사용 가능하고, 복잡한 상태의 변화를 useReducer로 관리하기
    - 전역 상태 관리를 통한 Props Drilling 해결 및 관심사 분리
    - 재사용 가능한 컴포넌트 만들기

## 🙃 PROBLEMS AND SOLUTIONS

### 🤖 재사용 가능한 페이지네이션 컴포넌트 만들기

- 게시글 목록에 사용되는 페이지네이션과, 댓글 목록에 사용되는 페이지네이션은 API CALL에 사용되는 endpoint만 다를 뿐 동일한 코드를 사용하는 컴포넌트였습니다.
- 하여, 불필요한 코드를 줄이고 페이지네이션이 재사용 가능한 공용 컴포넌트가 되도록 코드를 수정하였습니다.
  <br/>

**수정 전**
<br/>
<br/>
<code>Pagination.Post.jsx</code>와 <code>Pagination.Comment.jsx</code>가 별도의 컴포넌트로 구현되어 있었음
<br/>
<br/>
**수정 후**
<br/>
<br/>

```jsx
// Pagination.jsx
const Pagination = ({ target }) => {

  const fetchCommentPageNation = async () => {
    const response = await axios.get(`/api/${target}`, {
      params: ...
    });
...
}
```

```jsx
// Post.Detail.jsx
<Pagination target={"comments"} />
// Post.List.jsx
<Pagination target={"posts"} />
```

### 🤖 Dialog 로직 수정

**수정 전**

```js
const Dialog = React.forwardRef(
  ({ type, text, onConfirm, onCancel, onClose, position }, ref) => {
    return (
      <S.Wrapper ref={ref} $position={position}>
        <S.CloseButton onClick={onClose}>x</S.CloseButton>
        {text}
        <S.Button onClick={onConfirm}>확인</S.Button>
        {type === DialLogState.CONFIRM && (
          <S.Button onClick={onCancel}>취소</S.Button>
        )}
      </S.Wrapper>
    );
  }
);
```

- { type, text, onConfirm, onCancel, onClose, position }, ref를 모두 props로 전달하고,
  이를 다시 Dialog의 props로 전달하게 되어 props drilling 문제가 발생했습니다.
- React.forwardRef를 통해 상위 컴포넌트에서 직접 DOM 조작을 수행하는 구조였는데,
  이는 가상 DOM을 사용하여 불필요한 렌더링을 막는 React 장점에 맞지 않는 구현 방식이라는 생각이 들었습니다.

<br/>

```js
const onPressNavigateBlog = () => {
  setDiaLogAttribute({
    type: DialLogState.ALERT,
    text: "정말로 페이지를 이동하겠습니까",
    isOpen: true,
    onConfirm: async () => {
      await setDiaLogAttribute({ isOpen: false });
      window.location.href = "/posts";
    },
  });
};
```

- onConfirm, onCancel, onClose 콜백함수가 프로퍼티로 전달되었고, 이로 인해 상위 컴포넌트에서 관계를 처리해야 했습니다.
  이는 Dialog를 조작하는 로직을 전체 코드에 분산시켜 높은 수준의 의존성이 발생할 가능성이 있었습니다.

<br/>

```js
const DiaLogProvider = ({ children }) => {
  const diaLogRef = useRef();
  const [diaLogAttribute, setDiaLogAttribute] = useState({
    type: DialLogState.ALERT,
    text: "",
    isOpen: false,
    onConfirm: () => {},
    onCancel: () => {},
    position: {
      x: 50,
      y: 10,
    },
  });
```

- Dialog의 렌더링 여부를 결정하는 isOpen이 Dialog 관련 비즈니스 로직과 섞여있어
  열림/닫힘을 구현하기 위해 모든 속성을 전개 연산자로 복사한 후 isOpen을 수정해주어야 했습니다.

<br/>

**수정 후**

```js
const onPressNavigateBlog = () => {
  OpenDialog();
  dispatch({
    type: DialLogState.ALERT,
    payload: {
      text: "정말로 페이지를 이동하겠습니까",
      url: "/posts",
    },
  });
};
```

- Dialog 관련 로직을 Dialog, DialogProvider로 분리하고
  상위 컴포넌트에서는 Dialog에 필요한 데이터만 dispatch로 관리할 수 있도록 관심사 분리하였습니다.
  이를 통해 로직을 집중시키고, View 컴포넌트에서 Dialog 관련 로직을 처리하지 않도록 추상화할 수 있었습니다.

- onConfirm 등의 콜백 함수 등을 모두 전달하던 이전 코드와 달리,
  dispatch로 해당 페이지에 관련된 데이터만 넘김으로써 코드의 가독성을 높이고 유지보수 및 테스트가 편리해졌습니다.

```js
const Dialog = () => {
  const { state, isOpen, CloseDialog } = useDiaLogStore();
  const { type, text, position, url } = state;

...

  return isOpen ? (
    <S.Wrapper $position={position}>
      <S.CloseButton onClick={() => CloseDialog()}>x</S.CloseButton>
      {text}
      <S.Button onClick={handleConfirm}>확인</S.Button>
      {type === DialLogState.CONFIRM && (
        <S.Button onClick={() => CloseDialog()}>취소</S.Button>
      )}
    </S.Wrapper>
  ) : null;
};
```

- Dialog 컴포넌트 내부에서 useDialogStore 전역 상태를 활용하여 불필요한 Props Drilling을 없앴습니다.

```js
return(
  ...
  <Dialog />
)
```

- DOM에 직접 접근하여 Dialog를 렌더링 시켰던 이전 방식과 달리, jsx 식 안에서 dialog를 호출하여 React에서의 직관적인 선언적 접근 방식을 유지하고, 이후 해당 컴포넌트 조작을 용이하게 하였습니다.

```js

const DiaLogReducer = (state, action) => {
  switch (action.type) {
    case DialLogState.ALERT:
      return { ...state, ...action.payload };
  ...
    default:
      return state;
  }
};

```

- 콜백함수를 props로 전달하는 대신 reducer로 로직을 관리함으로써 코드 흐름을 단순화시키고,
  코드 중복 및 불필요한 렌더링을 줄였습니다.

```js
const initialState = {
  type: "",
  text: "",
  position: { x: 50, y: 10 },
};

const DiaLogProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [state, dispatch] = useReducer(DiaLogReducer, initialState);
  ...
  }

```

- isOpen을 별도의 상태로 선언하여 페이지 이동과 같은 비즈니스 로직과 분리될 수 있도록 하였습니다.
  이를 통해 Dialog의 열림/닫힘 이벤트 발생 시 디버깅이 어려웠던 문제점을 해소하고
  상태 변경 시 불필요하게 열림/닫힘 이벤트를 중복 작성해야 했던 번거로움을 줄였습니다.
