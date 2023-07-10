import React, { useCallback, useState } from "react";
import Box from "./cpnt/Box";

const MakeBoxChange = () => {
  const [size, setSize] = useState(100);
  const [isdarkMode, setisDarkMode] = useState(false);

  // css를 담은 object를 반환하는 함수
  // Box 컴포넌트가 처음 마운팅 되었을 때
  // : prop으로 전달된 controlBoxStyle의 return 값을 style로 가지는 Box를 그림
  // (이 경우 size는 초기값인 100)
  const controlBoxStyle = useCallback(() => {
    return {
      backgroundColor: "salmon",
      width: `${size}px`,
      height: `${size}px`,
    };
  }, [size]);

  return (
    <div
      style={{
        background: isdarkMode ? "black" : "white",
      }}
    >
      <input
        type="number"
        value={size}
        /* input 안의 숫자를 변경해주면 setSize 함수를 통해 size state 변경 */
        onChange={(e) => setSize(e.target.value)}
      />
      {/* Box는 controlBoxStyle이라는 함수를 prop으로 받아옴 */}
      <Box controlBoxStyle={controlBoxStyle} />
      <button onClick={() => setisDarkMode(!isdarkMode)}>Change Theme</button>
    </div>
  );
};

export default MakeBoxChange;

/*
[useCallback을 사용하기 전 change theme을 해주는데 useEffect가 실행되던 이유]
useEffect의 dependency인 controlBoxSize와는 관련이 없지만
어쨌든 isDarkMode state의 변화도 'state의 변화'이므로
change theme을 통해 state가 변화될 때마다 MakeBoxChange 컴포넌트가 다시 렌더링 되고
controlBoxStyle 변수는 그럴때마다 새로운 함수를 할당받게 되므로
size state가 변경된 것이 아님에도 useEffect가 실행된 것!
>> useCallback을 사용하여 size state가 변화할 때만 새로 Memoize 되도록 만들어 줄 수 있음
 */
