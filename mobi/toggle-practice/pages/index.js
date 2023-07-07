import { useLocation, useSearchParams } from "react-router-dom";
import NavBar from "../components/navBar";
import Header from "../components/header";
import { useEffect } from "react";
import handleParamKey from "../utils/handleParamKey";

const MainPage = () => {
  // param으로 전달된 값에 따라 content 부분에 보여줄 내용 결정
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const title = searchParams.get("title");
  const key = searchParams.get("key");

  // 뒤로 가기 했을 떄에도 활성화 유지되도록 함
  useEffect(() => {
    setValues([title, key]);
    setSearchParams(searchParams);
  }, [key, title, searchParams, location]);

  const setValues = (values) => {
    values.forEach((value, index) => {
      const key = index ? "key" : "title";
      searchParams.set(key, value);
      localStorage.setItem(key, value);
    });
  };

  const TargetContent = handleParamKey(title, key);
  return (
    <>
      <Header />
      <NavBar />
      {TargetContent}
    </>
  );
};

export default MainPage;
