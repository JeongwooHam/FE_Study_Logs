import { useEffect, useRef } from "react";

// 클릭하지 않아도 input 박스가 자동으로 focus 되어 있게 만들기
const LogInByID = () => {
  const inputRef = useRef();

  useEffect(() => {
    // console.log(inputRef); // 제일 처음에는 {current: undefined}

    inputRef.current.focus();
  }, []);

  const popUpInput = () => {
    alert(`환영합니다. ${inputRef.current.value}님:)`);
    // 로그인 > alert 창 뜸 > 창 닫고 나면 다시 자동으로 focus 됨
    inputRef.current.focus();
  };

  return (
    <>
      {/** input 값을 참조시켜준 것 */}
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={popUpInput}>LOGIN</button>
    </>
  );
};

export default LogInByID;
