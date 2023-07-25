import { useEffect, useState } from "react";
import styled from "styled-components";
import { DialLogState, useDiaLogStore } from "../contexts/DialogProvider";
import { WeatherApi } from "../apis/weather";

const HomePage = () => {
  const [isBackGroundBlur, setIsBackGroundBlur] = useState(true);
  const [weather, setWeather] = useState();
  const { dispatch } = useDiaLogStore();

  // axiosInstance 생성..?
  const fetchWeather = async () => {
    try {
      const response = await WeatherApi.getTodaysTemp();
      setWeather(response.data.response.body.items.item);
    } catch (err) {
      console.log(err);
      throw new Error("failed load weather api");
    }
  };

  useEffect(() => {
    fetchWeather();
    const userName = localStorage.getItem("userName");
    return userName ? setIsBackGroundBlur(false) : setIsBackGroundBlur(true);
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    const userName = e.target.userName.value.trim();
    if (!userName) return alert("이름을 입력해주세요");
    localStorage.setItem("userName", userName);
    setIsBackGroundBlur(false);
    e.target.userName.value = "";
  };

  const onPressNavigateBlog = () => {
    dispatch({
      type: DialLogState.ALERT,
      payload: { text: "정말로 페이지를 이동하겠습니까", url: "/posts" },
    });
  };

  return (
    <>
      {isBackGroundBlur && (
        <S.BlurBackGround>
          <S.UserNameForm onSubmit={onSubmit}>
            <input type="text" name="userName" placeholder="Enter your name" />
            <button type="submit">Submit</button>
          </S.UserNameForm>
        </S.BlurBackGround>
      )}
      <HomeContents>
        <h1>Home Page</h1>
        <h3>🌤️ 오늘의 기온 🌡️</h3>
        <p>
          <span>{weather?.find((el) => el.category === "T1H").obsrValue}</span>
          °C
        </p>
        <S.Button onClick={onPressNavigateBlog}>블로그 보러가기</S.Button>
      </HomeContents>
    </>
  );
};
export default HomePage;

const BlurBackGround = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 9999;
  backdrop-filter: blur(10px);
`;

const UserNameForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

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
  BlurBackGround,
  UserNameForm,
  Button,
  HomeContents,
};
