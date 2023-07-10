import PostList from "./components/post-list";
import RecommendUsers from "./components/recommend-users";

import styled from "styled-components";
import Story from "./components/story";
import DetailModal from "./components/detailModal";

const Main = () => {
  return (
    <>
      <DetailModal />
      <S.Container>
        <S.Contents>
          <Story />
          <PostList />
        </S.Contents>
        <S.Footer>
          <RecommendUsers />
        </S.Footer>
      </S.Container>
    </>
  );
};
export default Main;

const Container = styled.div`
  height: 100%;
  display: flex;
`;

const Contents = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Footer = styled.div`
  width: 30%;
`;

const S = {
  Container,
  Contents,
  Footer,
};
