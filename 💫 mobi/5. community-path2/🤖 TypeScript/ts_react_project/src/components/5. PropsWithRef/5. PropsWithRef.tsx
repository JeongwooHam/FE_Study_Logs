import React, { forwardRef, useRef, PropsWithRef, FC } from "react";

// forwardRef
type InputProps = {
  value: string;
  placeholder: string;
};

const MyInput1 = forwardRef<HTMLInputElement, InputProps>(
  ({ value, placeholder }, ref) => {
    return (
      <input type="text" ref={ref} placeholder={placeholder} value={value} />
    );
  }
);

export function InputBox1() {
  const inputRef = useRef<HTMLInputElement>(null);

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

// PropsWithRef
type InputProps2 = {
  value: string;
  placeholder: string;
  ref: React.Ref<HTMLInputElement>;
};

const MyInput2: FC<PropsWithRef<InputProps2>> = ({
  value,
  placeholder,
  ref,
}) => {
  return (
    <input type="text" ref={ref} value={value} placeholder={placeholder} />
  );
};

export const InputBox2: FC<PropsWithRef<InputProps2>> = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFocus() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <>
      <MyInput2
        ref={inputRef}
        value="write here"
        placeholder="여기에 입력하세요"
      />
      <button onClick={handleFocus}>제출하기</button>
    </>
  );
};
