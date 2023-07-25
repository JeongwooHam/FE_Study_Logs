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
<code>Pagination.Post.jsx</code>와 <code>tPagination.Comment.jsx</code>가 별도의 컴포넌트로 구현되어 있었음
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
