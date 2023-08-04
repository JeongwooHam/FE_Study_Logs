import React, { RefObject, useState } from "react";

interface Props<T> {
  refProps: RefObject<T>;
}

const RefObjectExample: React.FC<
  React.PropsWithRef<Props<HTMLInputElement>>
> = ({ refProps }) => {
  const [textList, setTextList] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (refProps.current) {
      setTextList((prev) => [...prev, refProps.current.value]);
      refProps.current.value = "";
    }
  };

  return (
    <>
      <div>검색어를 작성하세요</div>
      <form onSubmit={handleSubmit}>
        <input ref={refProps} type="text" />
        <button>제출</button>
      </form>
      <div>
        {textList.map((text, i) => (
          <div key={i}>{text}</div>
        ))}
      </div>
    </>
  );
};

export default RefObjectExample;
