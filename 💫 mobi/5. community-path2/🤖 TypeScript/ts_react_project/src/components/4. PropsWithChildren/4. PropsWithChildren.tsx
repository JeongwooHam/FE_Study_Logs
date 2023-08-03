import React, { PropsWithChildren, ReactNode } from "react";

type PROPS = {
  user: string;
  text: string;
};

export default function Component({
  user,
  text,
  children,
}: PropsWithChildren<PROPS>) {
  return (
    <div>
      <p>
        {user}: {text}
      </p>
      {children}
      <p>
        댓글 달기: <input />
      </p>
    </div>
  );
}

const BOX1 = () => {
  return (
    <Component user="aa11" text="hi">
      {"hello everyone"}
      <div>안녕하세요</div>
    </Component>
  );
};

const BOX2 = () => {
  return (
    // children이 없어도 에러가 발생하지 않는다.
    <Component user="aa11" text="hi"></Component>
  );
};

// 이때, children을 강제해주는 타입을 직접 정의해주어도 좋다.
type ForceChildren<P> = P & { children: ReactNode };

export function Component2({ user, text, children }: ForceChildren<PROPS>) {
  return (
    <div>
      <p>
        {user}: {text}
      </p>
      {children}
      <p>
        댓글 달기: <input />
      </p>
    </div>
  );
}

const BOX3 = () => {
  return (
    <Component2 user="aa11" text="hi">
      {"hello everyone"}
      <div>안녕하세요</div>
    </Component2>
  );
};

// 에러 발생!
// 'children' 속성이 '{ user: string; text: string; }' 형식에 없지만
// '{ children: ReactNode; }' 형식에서 필수입니다.
const BOX4 = () => {
  return (
    // children이 없어도 에러가 발생하지 않는다.
    <Component2 user="aa11" text="hi"></Component2>
  );
};
