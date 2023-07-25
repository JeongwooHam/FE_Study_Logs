import { useEffect, useState } from "react";
import styled from "styled-components";
import { DialLogState, useDiaLogStore } from "../../contexts/DialogProvider";
import Dialog from "../../components/Dialog";
import NameForm from "./components/NameForm";
import WeatherInfo from "./components/Weather";

const HomePage = () => {
  const [isBackGroundBlur, setIsBackGroundBlur] = useState(true);
  const { isOpen, OpenDialog } = useDiaLogStore();
  // console.log("isOpen: ", isOpen);

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    return userName ? setIsBackGroundBlur(false) : setIsBackGroundBlur(true);
  }, []);

  return (
    <>
      {isBackGroundBlur && (
        <NameForm setIsBackGroundBlur={setIsBackGroundBlur} />
      )}
      <HomeContents>
        <h1>Home Page</h1>
        <WeatherInfo />
        <S.Button onClick={OpenDialog}>블로그 보러가기</S.Button>
      </HomeContents>
      <Dialog />
    </>
  );
};
export default HomePage;

const HomeContents = styled.div`
  text-align: center;
  margin: 15% 0;
  overflow-y: hidden;
  line-height: 50px;
  p > span {
    font-size: 50px;
    color: #7895cb;
  }
`;

const Button = styled.button`
  background-color: black;
  border: none;
  color: white;
  font-size: 16px;
  padding: 10px;
  margin-top: 10px;
  &:hover {
    background-color: gray;
  }
`;

const S = {
  Button,
  HomeContents,
};

// const onPressNavigateBlog = () => {
//   console.log("clicked");
//   setIsOpen(true);
//   dispatch({
//     type: DialLogState.ALERT,
//     payload: { text: "정말로 페이지를 이동하겠습니까", url: "/posts" },
//   });
// };
