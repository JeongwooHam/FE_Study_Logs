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

#### 🔎 References

[How to safely type the useReducer hook](https://www.fabiobiondi.dev/blog/2023-01/how-to-safely-type-usereducer-in-react-and-typescript) <br/>
[How to type state and dispatch for useReducer - TypeScript and React](https://stackoverflow.com/questions/59432133/how-to-type-state-and-dispatch-for-usereducer-typescript-and-react) <br/>
[https://stackoverflow.com/questions/54844839/typescript-how-to-type-the-dispatch-in-redux](https://stackoverflow.com/questions/54844839/typescript-how-to-type-the-dispatch-in-redux)

#### 🤖 Code References

[Dispatch Examples_1](https://github.com/TrueFiEng/useDApp/blob/master/packages/core/src/providers/blockNumber/common/subscribeToNewBlock.ts) <br/>
[Dispatch Examples_2](https://github.com/artifacthub/hub/blob/master/web/src/context/AppCtx.tsx) <br/>
[Dispatch Examples_3](https://github.com/geekdada/yasd/blob/master/src/models/profile.tsx)
