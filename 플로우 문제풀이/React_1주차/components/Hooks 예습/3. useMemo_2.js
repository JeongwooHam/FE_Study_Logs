import { useEffect, useMemo, useState } from "react";

const Questions = () => {
  const [worker, setWorker] = useState(0);
  const [onOff, setOnOff] = useState(true);

  //   const state = { isWorking: onOff ? "업무 중 :(" : "퇴근 :)" };
  const state = useMemo(() => {
    return { isWorking: onOff ? "업무 중 :(" : "퇴근 :)" };
  }, [onOff]);

  // 맨 처음 렌더링 되었을 때, state에 변경이 생길 때 실행됨
  // 하지만 state가 객체라면 worker에 변경이 생기더라도 useEffect가 실행됨
  // number state 변경 > Questions 다시 호출 > 초기화된 state는 새로운 객체를 할당 받음
  // 원시타입이었던 onOff(string)과 달리 객체가 되면 이전의 객체와 다른 주소값을 가지므로 다른 값이 됨
  // 항상 false인 상태이므로 이는 계속 변화가 생기고 있는 것과 동일하고, 결국 number만 바뀌어도 useEffect가 실행되는 것
  useEffect(() => {
    // console.log("useEffect is called.");
  }, [state]);

  return (
    <div>
      <h3>출근한 직원은 몇 명입니까?</h3>
      <input
        type="number"
        value={worker}
        onChange={(e) => {
          setWorker(e.target.value);
        }}
      ></input>
      <h3>A는 근무 중입니까?</h3>
      <p>그는 지금... {state.isWorking}</p>
      <button onClick={() => setOnOff(!onOff)}>CHANGE</button>
    </div>
  );
};

export default Questions;
