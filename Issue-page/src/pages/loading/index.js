import LoadingLogo from "../img/loading.gif";
import styled from "styled-components";

const LoadingPage = () => {
  return (
    <>
      <Container>
        <Logo alt="loading" src={LoadingLogo} />
      </Container>
    </>
  );
};

export default LoadingPage;

const Container = styled.div`
  height: 150px;
  width: 500px;
  background-color: white;
  border-radius: 16px;
  margin: 10px 0px;
  margin-left: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
`;
