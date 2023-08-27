import { useState } from "react";
import Q3components from "../../components/1.basic/q3components";
import { useEffect } from "react";

function Q3() {
  const [isTimerOn, setIsTimerOn] = useState(false);
  const [countVal, setCountVal] = useState(0);
  let interval = null;

  const onSetTimerOn = () => {
    setIsTimerOn(true);
  };

  const onSetTimerOff = () => {
    setIsTimerOn(false);
  };

  useEffect(() => {
    console.log(isTimerOn);

    if (isTimerOn) {
      interval = setInterval(() => {
        setCountVal((prev) => prev + 1);
      }, 2000);
    }

    return () => {
      clearInterval(interval);
      setCountVal(0);
    };
  }, [isTimerOn]);

  return (
    <>
      <h1>문제3</h1>
      <div>
        <p> 줄넘기 횟수 : {countVal} </p>
        {isTimerOn && <Q3components />}
        <p>
          <button onClick={onSetTimerOn}>줄넘기 시작</button>
        </p>
        <p>
          <button onClick={onSetTimerOff}>줄넘기 중지</button>
        </p>
      </div>
    </>
  );
}
export default Q3;
