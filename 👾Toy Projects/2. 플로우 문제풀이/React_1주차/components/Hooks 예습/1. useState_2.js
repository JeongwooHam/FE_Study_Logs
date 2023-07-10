import { useState } from "react";

const heavyWork = () => {
  // console.log("HEAVYWORKS!!!");
  return ["aaa", "bbb"];
};

const UploadText = () => {
  const [names, setNames] = useState(() => {
    return heavyWork();
  });

  // input 안에 가지고 있는 값을 tracking 해주는 state
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    // e.target.value를 새로운 input으로 지정해줌
    setInput(e.target.value);
  };

  //   console.log(input);

  const handleUpload = () => {
    // callback의 인자로는 업데이트 전 state가 들어감
    // return 값이 새로 업데이트 되는 state가 됨
    setNames((prev) => {
      console.log(prev);
      return [...prev, input];
    });
  };

  return (
    <>
      <div>
        <input type="text" value={input} onChange={handleInputChange} />
        <button onClick={handleUpload}>UPLOAD</button>
        {names.map((name, idx) => {
          return <p key={idx}>{name}</p>;
        })}
      </div>
    </>
  );
};

export default UploadText;
