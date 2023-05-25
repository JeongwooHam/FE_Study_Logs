import { useCallback, useEffect, useState } from "react";

const CallCallbackFunc = () => {
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(true);

  // 버튼을 누르면 현재 number state에 어떤 숫자가 들어있는지 확인 가능
  /* 
  이렇게 넣어주면 number state가 바뀌는 것은 callbackFunc이 바뀌는 것이 아님에도 불구하고
  useEffect는 number state가 바뀔때마다 실행되게 됨
  이는 number state의 변경으로 CallCallbackFunc component가 다시 렌더링되면서
  callbackFunc 변수에 새로운 callbackFunc가 담기게 되는데
  함수는 객체의 일종으로 이전의 콜백함수와 새로 할당된 콜백함수는 다른 주소값을 가지므로
  useEffect는 callbackFunc에 변화가 생긴 것으로 인식하여 실행되는 것
  */
  // const callbackFunc = () => {
  //   console.log(`num is ${number}`);
  //   return;
  // };

  // dependencies로 빈 배열을 넣어주면
  // 처음 렌더링 하면서 Memoization할 당시 number의 값이었던 0을 기억하므로
  // button에 click 이벤트가 발생하여 callbackFunc이 실행되어도 계속 0만을 반환하게 됨
  // useEffect는 처음 렌더링 시 한 번만 실행됨

  // dependencies로 number state를 넣어주면
  // number가 바뀔 때마다 새로운 number 값이 반영된 callback 함수가 Memoization 되므로
  // useEffect 함수는 계속 실행됨
  const callbackFunc = useCallback(() => {
    console.log(`num is ${number}`);
    return;
  }, []);

  useEffect(() => {
    // console.log("callbackFunc is changed.");
  }, [callbackFunc]);

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {toggle.toString()}
      </button>
      <br />
      <button onClick={callbackFunc}>Call CallbackFunc</button>
    </div>
  );
};

export default CallCallbackFunc;
