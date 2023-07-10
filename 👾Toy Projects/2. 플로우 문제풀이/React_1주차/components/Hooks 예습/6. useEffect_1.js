import { useState, useEffect } from "react";

const CountWithUseEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // 렌더링 될 때마다 매번 실행됨
  // state 업데이트 될 때마다 component 렌더링 > useEffect 실행
  // useEffect 내부의 콜백함수는 해당 component가 화면에 렌더링 된 직후에 호출됨
  // 매번 렌더링 될 때마다 실행되므로 비효율적
  useEffect(() => {
    // console.log("rendered");
  });
  // 뒤에 빈 배열을 넣어주면 mount 될 때(화면에 처음 렌더링 됐을 때)만 실행됨

  // name이 업데이트 될 때는 무시하고 count가 업데이트 될 때만 실행하려면
  // mount + count가 변경될 때마다 실행됨
  useEffect(() => {
    // console.log("count changed");
  }, [count]);

  // count가 업데이트 될 때는 무시하고 name이 업데이트 될 때만 실행하려면
  // mount + name이 변경될 때마다 실행됨
  useEffect(() => {
    // console.log("name changed");
  }, [name]);

  return (
    <>
      <div>count: {count}</div>
      <button onClick={handleCountUpdate}>UPDATE</button>
      <br />
      <input type="text" value={name} onChange={handleInputChange} />
      <br />
      <span>name: {name}</span>
    </>
  );
};

export default CountWithUseEffect;
