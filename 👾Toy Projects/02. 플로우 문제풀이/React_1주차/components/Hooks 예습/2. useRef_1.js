import { useState, useRef } from "react";

// state와 ref의 차이
const CountState = () => {
  // state가 변경될 때마다 함수 CountState는 계속 렌더링 됨
  const [count, setCount] = useState(0);
  const countRef = useRef(0); // countRef.current로 초기값에 접근 가능

  // console.log(countRef);

  const increaseCountState = () => {
    setCount(count + 1);
  };

  // 누를때마다 변화된 값이 보이는 것이 아니라 값만 올라가다가 useState가 실행되면 그때 바뀐 값이 보임
  const increaseCountRef = () => {
    countRef.current += 1;
  };

  return (
    <>
      <p>STATE: {count}</p>
      <p>REF = {countRef.current}</p>
      <button onClick={increaseCountState}>INCREASESTATE</button>
      <button onClick={increaseCountRef}>INCREASEREF</button>
    </>
  );
};

// ref와 일반 변수의 차이
export const CountVariable = () => {
  const [render, setRender] = useState(0);
  const countRef = useRef(0);
  // 변수는 함수가 불릴때마다 초기화됨
  let countVar = 0;

  const doRendering = () => {
    setRender();
  };

  const increaseCountRef = () => {
    countRef.current += 1;
    console.log("REF: ", countRef.current);
  };

  const increaseCountVar = () => {
    countVar += 1;
    console.log("VAR: ", countVar);
  };

  const printResult = () => {
    console.log(`ref: ${countRef.current}, var: ${countVar}`);
  };

  return (
    <>
      <p>Ref: {countRef.current}</p>
      <p>Var: {countVar}</p>
      <button onClick={doRendering}>RENDERING</button>
      <button onClick={increaseCountRef}>INCREASEREF</button>
      <button onClick={increaseCountVar}>INCREASEVAR</button>
      <button onClick={printResult}>print result</button>
    </>
  );
};

export default CountState;
