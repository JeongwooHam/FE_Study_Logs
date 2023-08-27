import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Input from "../../components/1.basic/q1-1Input";

function Q1(props) {
  // 문제 1-1

  // const [state, setState] = useState(true);
  // const inputVal = useRef("");
  // const availability = useRef(false);

  // const onChangeInput = (e) => {
  //   inputVal.current = e.target.value;
  //   setState(!state);
  //   if (inputVal.current === "김성용") {
  //     console.log(inputVal.current);
  //     availability.current = true;
  //   }
  // };

  const [value, setValue] = useState("");
  const [availability, setAvailability] = useState(false);
  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (value === "김성용") {
      setAvailability(true);
    }
  }, [value]);

  // 문제 1-2
  const [state2, setState2] = useState(true);
  const btnText = useRef("보이기");

  const onChangeBtn = () => {
    setState2((prev) => !prev);
  };

  useEffect(() => {
    // console.log(state2);
    if (state2) {
      btnText.current = "숨기기";
    } else {
      btnText.current = "보이기";
    }
  }, [state2]);

  return (
    <>
      <h1>문제1</h1>
      <div>
        <h2>문제1-1.</h2>
        <Input
          type="text"
          placeholder={"김성용"}
          textAlign="center"
          value={value}
          onChange={onChangeInput}
        />
        <S.Message style={{ color: availability ? "green" : "red" }}>
          {" "}
          {availability
            ? "올바르게 입력하셨습니다."
            : "올바르게 글을 작성해주세요"}{" "}
        </S.Message>
      </div>

      <div>
        <h2>문제1-2. </h2>
        <button onClick={onChangeBtn}>{btnText.current}</button>
        {btnText.current === "숨기기" && (
          <p> 이 문구는 보이기 상태일 때만 볼 수 있습니다 </p>
        )}
      </div>
    </>
  );
}
export default Q1;

const Message = styled.p``;

const S = {
  Message,
};
