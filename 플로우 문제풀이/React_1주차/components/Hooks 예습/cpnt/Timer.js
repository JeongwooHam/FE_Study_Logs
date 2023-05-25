import { useEffect } from "react";

const Timer = () => {
  // 맨 처음 브라우저에 마운팅 되었을 때 타이머(콜백함수) 실행됨

  /*
[unmount 되어도 timer가 멈추지 않는 이유]
setInterval을 통해 만들어준 함수를 정리해주지 않았기 때문
정리하기 위해서는 useEffect의 return 값으로 정리 작업을 실행할 함수를 넣어주면 됨
*/
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("🏃‍♀️...");
    }, 1000);

    return () => {
      // 정리작업코드
      clearInterval(timer);
      console.log("🧍‍♀️");
    };
  }, []);
  // useEffect가 두 번째 인자로 빈 배열을 받기 때문에
  // timer는 Timer component가 맨 처음 브라우저에 렌더링 되었을 때만 호출됨
  // 이후 Timer component가 unmount 될 때(화면에서 사라질 때)는 return 값인 정리작업함수가 호출됨

  return (
    <div>
      <span>타이머 시작!</span>
    </div>
  );
};

export default Timer;
