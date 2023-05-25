import { useState } from "react";
import Timer from "./Hooks 예습/cpnt/Timer";

const TimerWithUseEffect = () => {
  // showTime이 true일 때만 타이머 실행되도록 하기
  const [showTime, setShowTime] = useState(false);

  return (
    <>
      <div>
        {/* showTime이 true일 때만 <Timer/>을 보여주겠다는 의미 */}
        {showTime && <Timer />}
        <button
          onClick={() => {
            setShowTime(!showTime);
          }}
        >
          Toggle Timer
        </button>
      </div>
    </>
  );
};

export default TimerWithUseEffect;
