import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideNav from "../side-nav/side-nav";

const Layout = () => {
  return (
    <Container>
      <SideNav />
      <ContentBox>
        <Outlet />
      </ContentBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentBox = styled.div`
  position: absolute;
  left: 300px;
  height: 100%;
  width: calc(100% - 300px);
`;

export default Layout;
