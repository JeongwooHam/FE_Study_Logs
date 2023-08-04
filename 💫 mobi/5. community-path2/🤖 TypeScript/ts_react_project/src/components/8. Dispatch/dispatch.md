# 🌟 Dispatch

## 🦴 [Dispatch 구조 파악하기](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/813a8799e465a7d5f0d6776643f20f93681e85e4/types/react/index.d.ts#L872C27-L872C27)

```ts
// this technically does accept a second argument, but it's already under a deprecation warning
// and it's not even released so probably better to not define it.
// Unlike redux, the actions _can_ be anything
type Dispatch<A> = (value: A) => void;
```

> <code>type Dispatch<A> = (value: A) => void;</code>

- generic **A** 타입의 값을 매개변수로 받아 액션을 디스패치한다.
- Redux에서는 액션이 보통 plain object (객체 형태. 키 값으로 관리되며, 순서가 중요치 않은 데이터를 관리한다.)로 정의되어야 하지만, 이 dispatch 타입에서는 **A**로 정의된 액션은 어떤 형태든 가능하다.
- 복잡한 액션 구조를 다루기에 유연할 수 있다.

## 🗝️ Dispatch 사용하기

### 🤖 호출 시그니처인 Dispatch?

> 호출 시그니처

- 함수 타입을 인터페이스로 정의할 때 사용하는 것으로, 함수의 매개 변수와 리턴값의 타입을 지정한다.
- 간단하게 말하자면, 함수의 타입을 표현하는 방법이다.
- 함수에 함수를 전달하거나, 함수를 반환할 때 이를 통해 어떤 값을 받고, 어떤 값을 반환하는지 명확하게 지정해줄 수 있다.
- Dispatch 구조 분석 부분을 보면 알 수 있듯, 원래 setStateAction이 없었다면 사용해야 했을 함수의 타입임을 알 수 있다.
- 즉, 우리는 DisPatch와 setStateAction을 통해 같은 타입의 함수를 구현하되, 더욱 명시적이고 가독성 좋은 방식으로 사용할 수 있게 된 것이다.

### 👾 useReducer과 Dispatch

- SetStateAction을 다루면서 useState와 Dispatch를 사용하는 방법을 알아보았으므로, 이번에는 useReducer에 어떻게 적용할 수 있을지 알아보고자 한다.

1. [reducer 생성하기](https://github.com/JeongwooHam/FE_Study_Logs/blob/master/%F0%9F%92%AB%20mobi/5.%20community-path2/%F0%9F%A4%96%20TypeScript/ts_react_project/src/components/8.%20Dispatch/StateContext.tsx)

- 복잡한 상태 관리 로직을 관리할 때 사용되는 useReducer 훅 함수에서, reducer 함수는 새로운 state와 action을 입력으로 받아 새로운 state를 반환한다.
- Dispatch는 이 reducer 함수에 action을 전달하고, state를 업데이트하는 중간 전달체 역할을 한다.

2. [Dispatch 사용하기](https://github.com/JeongwooHam/FE_Study_Logs/blob/master/%F0%9F%92%AB%20mobi/5.%20community-path2/%F0%9F%A4%96%20TypeScript/ts_react_project/src/components/8.%20Dispatch/8.%20Dispatch.tsx)

- Dispatch 함수는 action의 타입과 전달할 데이터를 받고, reducer 함수를 호출하여 새로운 상태로 업데이트 시켜준다.
- <code>createContext</code>를 할 때에 Dispatch 및 사용할 action의 타입을 정의해주는 부분을 제외하면 이전에 JS에서 사용하던 dispatch와 사용법은 거의 동일하다고 느꼈다.

#### 🔎 References

[How to type state and dispatch for useReducer - TypeScript and React](https://stackoverflow.com/questions/59432133/how-to-type-state-and-dispatch-for-usereducer-typescript-and-react) <br/>
