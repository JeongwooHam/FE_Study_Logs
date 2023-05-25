import { useState, useRef, useEffect } from "react";

const CountRendering = () => {
  const [count, setCount] = useState(1);
  const renderCount = useRef(1);

  // useEffect에 ref 대신 setRenderCount state를 넣어주게 되면 무한 루프 에러 발생
  /*
   1. INCREASE 버튼 클릭 시 setCount 함수가 실행됨
   2. setState가 업데이트 되었으므로 useEffect 실행됨
   3. useEffect 안의 setRenderCount 함수가 실행됨
   4. setRenderCount가 업데이트 되었으므로 useEffect 실행됨
   5. 무한반복...
   */
  useEffect(() => {
    renderCount.current += 1;
    console.log("renderCnt: ", renderCount.current);
  });

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>INCREASE</button>
    </>
  );
};

export default CountRendering;
