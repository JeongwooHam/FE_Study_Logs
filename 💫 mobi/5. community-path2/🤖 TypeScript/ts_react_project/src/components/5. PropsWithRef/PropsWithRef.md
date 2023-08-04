# 🌟 PropsWithRef

## 👾 forwardRef()

PropsWithRef를 사용하기 전에 ref를 prop으로 넘기기 위해 사용하는 <code>forwardRef()</code>에 대한 이해가 선행되어야 할 것 같다.

> forwardRef()란?

- React에서 ref prop은 HTML Element 접근이라는 특수한 용도로 사용되기 때문에 일반적인 prop으로 사용하는 것은 불가능하다.
- React 함수형 컴포넌트에서 ref prop을 사용하기 위해 사용해야 하는 함수가 바로 **forwardRef()**!

> forwardRef() 없이 ref prop을 넘기면?

<details>
<summary>코드 예제</summary>
<div markdown="1">

```tsx
function MyInput({ ref }) {
  // 자식 컴포넌트는 받아온 ref prop을 내부 input 태그의 ref prop으로 넘겨줌
  return <input type="text" ref={ref} />;
}

export default function InputBox() {
  // useRef로 생성한 ref 객체
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <>
      // 생성한 ref 객체를 자식 컴포넌트에 prop으로 넘겨줌
      <MyInput ref={inputRef} />
      <button onClick={handleFocus}>제출하기</button>
    </>
  );
}
```

</div>
</details>

<br/>

이러한 에러가 발생한다. <br/>
<img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/5b46497e-abdf-4fab-801d-0bab93d7e91c" width="60%"/>

에러 메세지에서 제안하는 해결방식은 두 가지이다.

(1) **_prop의 이름을 ref가 아닌 다른 것으로 바꾸기_**

<details>
<summary>수정 코드</summary>
<div markdown="1">

```tsx
import React, { useRef } from "react";

function MyInput({ refprop }) {
  return <input type="text" ref={refprop} />;
}

export default function InputBox() {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput refprop={inputRef} />
      <button onClick={handleFocus}>제출하기</button>
    </>
  );
}
```

</div>
</details>

<br/>

예시 코드처럼, prop의 이름을 refprop으로 수정하면 해당 에러는 발생하지 않는다. <br/>

    🤔 근데 이렇게 써도 될까?

    물론 'refprop' 정도면 직관적인 편에 속하긴 하지만,
    협업 등의 측면에서 봤을 때
    HTML element에서 사용하는 prop과 이름을 동일하게 ref로 사용하는 것이 좋아보인다.

(2) **_forwardRef() 사용하기_**

- ref는 React에서 특수한 목적으로 사용되기 때문에 일반적인 용도로 사용할 수 없다.
  - ref prop은 HTML element 접근이라는 특수 목적으로 사용되므로 일반적인 prop명으로 사용할 수 없다.
  - 따라서, HTML element가 아닌 React 컴포넌트에서 ref prop을 사용하려면 React에서 제공하는 <code>forwardRef()</code> 함수 사용이 필요하다!

> forwardRef()는 어떻게 사용할까?

<details>
<summary>코드 예제</summary>
<div markdown="1">

```tsx
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
```

</div>
</details>

<br/>

위처럼 코드를 수정해주면, 변수명을 ref로 지정해도 에러가 발생하지 않는 것을 확인할 수 있다.

<br/>
이처럼 <code>forwardRef()</code> 만 사용해줘도 화면에 에러 없이 렌더링되긴 하지만, <br/>
컴포넌트 자체를 Ref용으로 바꿔주어야 한다. <br/>
사실 컴포넌트 내부에서 직접 ref를 다루게 된다고 해서 문제가 있는 것은 아니지만, <br/>

**🤔 일반 React.FC에서 Ref를 prop으로 사용하려면 어떻게 해야 할까?** <br/>
이때 사용할 수 있는 것이 바로 PropsWithRef이다. <br/>

## 🦴 [PropsWithRef 구조 파악하기](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/813a8799e465a7d5f0d6776643f20f93681e85e4/types/react/index.d.ts#L810)

```ts
/** Ensures that the props do not include string ref, which cannot be forwarded */
// ref 속성이 문자열로 전달되는 것을 방지하고, 다른 타입의 ref만 허용하도록 props를 보장한다.
type PropsWithRef<P> =
  // Just "P extends { ref?: infer R }" looks sufficient, but R will infer as {} if P is {}.
  "ref" extends keyof P
    ? P extends { ref?: infer R }
      ? string extends R
        ? PropsWithoutRef<P> & { ref?: Exclude<R, string> }
        : P
      : P
    : P;
```

> "ref" extends keyof P ?

- **"ref"** 라는 속성이 **P** 의 속성들 중에 포함되어 있는지 검사하는 조건식
- **P** 에 **ref** 속성이 존재하는가?
- **p**가 <code>{ ref: ... }</code> 형태인지 검사한다.

> P extends { ref?: infer R } ?

- **P** 가 <code>{ ref?: infer R }</code> 형태일 때, **ref**의 타입을 추론하는 조건식
- **R**은 **ref** 속성의 타입으로 추론된다.
- 만약 **P** 가 빈 객체 <code>{ }</code> 일 경우 (어떠한 속성도 가지지 않을 경우) TS는 **P** 를 <code>{ ref?: infer R }</code> 로 해석함
  - 다시 말해, **ref** 속성은 존재하나 추론되지 않고, <code>{ }</code> 로 추론됨
  - 조건부 타입에서 타입이 일치하지 않을 때 (해당 타입의 속성이 없는 경우) 그 타입은 빈 객체로 추론되기 때문
  - 첫 번째 조건식에서는 **P** 가 빈 객체여도 통과하나, 이 조건식에서 **P** 가 빈 객체이므로 **ref** 의 타입이 <code>{ }</code> 로 추론되는 것

> string extends R ?

- **R** 이 string으로 추론 가능한지 확인하는 조건식
- **R** 이 문자열 타입인 경우
  - `PropsWithoutRef<P>` 와 `{ ref?: Exclude<R, string> }` 을 합쳐서 반환한다.
  - **P**에서 **ref** 속성을 제거한 뒤, **R**이 문자열 타입이 아닌 경우에만 **ref** 속성을 추가한다.
  - TS에서, EmptyObject는 모든 타입의 상위 타입으로 취급되므로, string이 <code>{ }</code> 를 상속하게 되므로 빈 객체의 경우 위의 조건식은 참이 된다.
  - 이를 통해 빈 객체의 경우 **ref** 속성의 타입이 <code>{ }</code> 로 추론되는 것을 막을 수 있다.
- **R**이 문자열 타입이 아닌 경우
  - 그대로 **P** 를 반환한다.
  - **P** 에 **ref** 속성이 존재하고, **ref** 가 문자열 타입으로 추론되는 경우 아무 작업 없이 그대로 **P** 반환한다.

## 🗝️ PropsWithRef 사용하기

```tsx
type InputProps2 = {
  ...
  ref: React.Ref<HTMLInputElement>;
};

const MyInput2: FC<PropsWithRef<InputProps2>> = ({...}) => {
  return (
    <input ref={ref} ... />
  );
};
```

- 위의 코드에서, `PropsWithRef<P>` 의 **P** 부분은 위에서 정의산 InputProps2가 될 것이라고 예상할 수 있다.
- PropsWithRef가 React.FC에서도 Ref를 props로 사용할 수 있게 해주는 원리는 아래와 같다.

1. TS에서는 타입의 프로퍼티 중 **ref**가 있는지 검사한다.
2. 키 값 중 **ref**가 있다면, 해당 프로퍼티가 ref를 키 값으로 갖고, value가 존재하는 형태인지 검사한다.
3. `React.Ref<HTMLInputElement>` 라는 value가 존재하므로 **ref**는 빈 값이 아님을 확인한다.
4. **ref** 라는 프로퍼티 키 값에 `React.Ref<HTMLInputElement>` 값을 할당한다.

- 이를 통해 **ref** 속성은 문자열이 아닌 useRef로 구현된 ref로서 전달된다.

#### 🔎 References

- [Why doesn't React.PropsWithRef<P> add 'ref' property?](https://stackoverflow.com/questions/66389272/why-doesnt-react-propswithrefp-add-ref-property) <br/>
- [[React] ref를 prop으로 넘기기 - forwardRef()](https://dori-coding.tistory.com/entry/React-ref%EB%A5%BC-prop%EC%9C%BC%EB%A1%9C-%EB%84%98%EA%B8%B0%EA%B8%B0-forwardRef)
- [[React] forwardRef 사용법](https://www.daleseo.com/react-forward-ref/)

#### 🫠 추가로 공부해볼 자료들 (아직 너무 어려움)

- [Polymorphic한 React 컴포넌트 만들기](https://kciter.so/posts/polymorphic-react-component)
- [제목은... 재사용성이 높은 컴포넌트 만들기라고 하겠습니다. 근데 이제 타입스크립트를 곁들인](https://www.pumpkiinbell.com/blog/react/reusable-components)
