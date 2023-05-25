import { useEffect, useState } from "react";

function Q3components() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div> 🏃‍♂️ 줄넘기 ... ing </div>
    </>
  );
}
export default Q3components;
