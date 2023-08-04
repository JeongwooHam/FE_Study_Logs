# 🌟 SetStateAction

## 🦴 [SetStateAction 구조 파악하기](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/813a8799e465a7d5f0d6776643f20f93681e85e4/types/react/index.d.ts#L869)

```ts
// Unlike the class component setState, the updates are not allowed to be partial
type SetStateAction<S> = S | ((prevState: S) => S);
```

> S

- S 자체가 직접적인 업데이트를 나타내는 값이 될 수 있다.
- <code>setState(value)</code> 처럼 값이 직접 변경되는 경우를 의미한다.

> ((prevState: S) => S)

- 상태를 업데이트하는 함수를 의미한다.
- 이전 상태인 **prevState** 를 인자로 받아 새로운 상태 **S**를 반환한다.
- <code>setState((prev) => !prev)</code> 와 같은 경우 사용된다.

## 🗝️ SetStateAction 사용하기

- setStateAction은 이름에서도 유추할 수 있듯, useState 상태를 변경하는 함수인 setState에 관련된 타입이다.

### 🤖 Dispatch<SetStateAction<T>>

```tsx
function Parent() {
  const [state, setState] = useState(false);

  return (
    <div>
      <Child setState={setState} />
    </div>
  );
}
```

- 위와 같은 부모 컴포넌트가 있다고 가정해보자.
- 자식 컴포넌트에서 위의 setState를 어떤 타입으로 받아올 수 있을까?

> 좋지 않은 방법

```tsx
interface ChildProps {
  setState: () => void;
}
```

- 이렇게 사용하게 되면, 일반적으로 인자를 받아 사용하는 setState의 용도와 맞지 않는 타입 선언이 될 수 있다.
- 이 정의만 봤을 때는 어떤 인자를 받는지, 심지어는 인자를 받는게 맞는지 예상이 불가능하므로 필요한 정보를 포함시키지 못할 수 있다.
- 또한 상태를 업데이트하는 로직을 해당 정의는 반영하지 않고 있으므로, 가독성에도 좋지 않다.
- 이는 나중에 로직을 수정해야 할 때 불편을 초래할 수 있다.

> 이렇게 사용하자!

```tsx
interface ChildProps {
  setState: Dispatch<SetStateAction<boolean>>;
}
const Child: React.FC<ChildProps> = ({ setState }) => {
  return (
    <div>
      <button onClick={() => setstate((prev) => !prev)}>CLICK!</button>
    </div>
  );
};
```

- 이때 Dispatch와 setStateAction을 통해 setState 함수의 타입을 정의해주면 상태 업데이트 필요 시 요구하는 인자와 반환 값을 정확하게 명시할 수 있다.
- setState가 인자로 받고, 업데이트하게 될 값의 타입이 boolean임을 쉽게 파악할 수 있다.
- 이는 해당 프로퍼티의 의미를 알기 쉽게 함으로써 가독성을 좋게 하고, 추후 유지보수에도 용이하다.

> 만약 Dispatch 없이 setStateAction만 쓴다면?

```tsx
import React, { SetStateAction } from "react";

interface Props {
  setState: SetStateAction<boolean>;
}

export const MyInput: React.FC<Props> = ({ setState }) => {
  return (
    <>
      <button onClick={() => setState(false)}></button>
    </>
  );
};
```

<img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/5f976eb5-b2b9-46d6-b73c-17a531428970" width="50%"/>

- 위와 같은 에러가 발생한다.
- 그렇다면 Dispatch가 **호출 시그니처** 의 역할을 하고 있다는 뜻인데, 정확히 Dispatch의 역할은 무엇일까? <br/> <br/>
  **_[여기](https://github.com/mobi-community/mobi-path-typescript/blob/Jane/1week/3.%20ts_react_project/src/components/8.%20Dispatch/dispatch.md)서 알아보도록 하자._**

#### 🔎 References

- [react typescript what type is setState?](https://stackoverflow.com/questions/64082847/react-typescript-what-type-is-setstate)
- [[Typescript] <React.SetStateAction<type>> useState의 set함수 타입2](https://w-world.tistory.com/316)
