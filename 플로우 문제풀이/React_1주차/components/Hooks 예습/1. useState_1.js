import { useState } from "react";

const Time = () => {
  const [time, setTime] = useState(0);

  const handleClick = () => {
    if (time === 24) {
      setTime(time - 24);
    } else {
      setTime(time + 1);
    }
  };

  return (
    <>
      <div>현재 시각: {time}시</div>
      <button onClick={handleClick}>UPDATE</button>
    </>
  );
};

export default Time;
