import React, { forwardRef, useRef, PropsWithRef, FC } from "react";

type InputProps = {
  value: string;
  placeholder: string;
};

const MyInput1 = forwardRef<HTMLInputElement, InputProps>(({ value }, ref) => {
  return <input type="text" ref={ref} value={value} />;
});

export function InputBox1() {
  const inputRef = useRef(null);

  function handleFocus() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <>
      <MyInput1 ref={inputRef} value="hi:)" placeholder="write here" />
      <button onClick={handleFocus}>제출하기</button>
    </>
  );
}

const MyInput2: FC<PropsWithRef<InputProps>> = ({ value }, ref) => {
  return <input type="text" ref={ref} value={value} />;
};

export default function InputBox2() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFocus() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <>
      <MyInput2 ref={inputRef} value="write here" />
      <button onClick={handleFocus}>제출하기</button>
    </>
  );
}
