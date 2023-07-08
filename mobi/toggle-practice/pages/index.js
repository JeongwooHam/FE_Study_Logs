import { useSearchParams } from "react-router-dom";
import NavBar from "../components/navBar";
import Header from "../components/header";
import useParamKey from "../hooks/useParamKey";

const MainPage = () => {
  // param으로 전달된 값에 따라 content 부분에 보여줄 내용 결정
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title");
  const key = searchParams.get("key");
  console.log("key", key);

  const TargetContent = useParamKey(title, key);

  return (
    <>
      <Header />
      <NavBar />
      {TargetContent}
    </>
  );
};

export default MainPage;
