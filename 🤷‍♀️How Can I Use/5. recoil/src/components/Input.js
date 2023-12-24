import React from "react";
import useAtomState from "../hooks/useAtomState";

const Input = () => {
  const { text, setText } = useAtomState();

  const handleChange = (e) => setText(e.target.value);

  return (
    <div>
      <input type='text' value={text} onChange={handleChange} />
      <div style={{ height: "50px" }}></div>
      <div style={{ display: "flex" }}>
        <p>입력값: </p>
        <p style={{ marginLeft: "10px", border: "1px solid", width: "100px" }}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default Input;
