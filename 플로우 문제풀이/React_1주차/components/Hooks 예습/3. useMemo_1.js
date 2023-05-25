import { useMemo, useState } from "react";

const HeavyCalculation = (num) => {
  // console.log("HARD WORK");
  // 무거운 계산을 구현하기 위해 의미 없는 for loop를 넣어준 것
  // for (let i = 0; i < 99999999; i++) {}
  return num + 100000;
};

/* 
    for loop를 지우고 더하는 값을 줄여도 똑같이 delay가 생기는 것을 확인할 수 있음
    Calculator component가 함수형 component이므로
    lightNum이라는 state가 바뀔 때마다 Calculator는 다시 렌더링 됨
    >> 모든 변수가 초기화되므로 easySum 뿐만 아니라 hardSum까지 초기화되고,
       hardSum을 위한 HeavyCalculation 함수까지 재실행되므로 지연이 발생하는 것
*/

const LightCalculation = (num) => {
  // console.log("EASY WORK");
  return num + 1;
};
// Calculator가 렌더링 된다는 것은 Calculator 함수가 호출된다는 것을 의미

const Calculator = () => {
  const [heavyNum, setHeavyNum] = useState(1);
  const [lightNum, setLightNum] = useState(1);

  // const hardSum = HeavyCalculation(heavyNum);
  /* useMemo를 사용하면 특정 조건이 만족되었을 때만 변수들이 초기화되고,
    만족시키지 못한다면 component가 다시 렌더링 되더라도 변수들이 초기화되지 않고
    이전에 저장해두었던 값을 그대로 사용할 수 있게 함 (Memoization)*/
  const hardSum = useMemo(() => {
    // return 값에 Memoize할 값을 넣어주면 됨
    return HeavyCalculation(heavyNum);
  }, [heavyNum]);
  // heavyNum에 변경이 있을 때만 hardSum 초기화

  const easySum = LightCalculation(lightNum);

  return (
    <div>
      <h3>어려운 계산</h3>
      <input
        type="number"
        value={heavyNum}
        onChange={(e) => {
          setHeavyNum(parseInt(e.target.value));
        }}
      />
      <span> + 100000 = {hardSum}</span>

      <h3>쉬운 계산</h3>
      <input
        type="number"
        value={lightNum}
        onChange={(e) => {
          setLightNum(parseInt(e.target.value));
        }}
      />
      <span> + 1 = {easySum}</span>
    </div>
  );
};

export default Calculator;
