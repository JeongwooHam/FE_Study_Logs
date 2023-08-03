# 🌟 Dispatch

```ts
// this technically does accept a second argument, but it's already under a deprecation warning
// and it's not even released so probably better to not define it.
type Dispatch<A> = (value: A) => void;
// Since action _can_ be undefined, dispatch may be called without any parameters.
type DispatchWithoutAction = () => void;
// Unlike redux, the actions _can_ be anything
```

#### 🔎 References

[DefinitelyTyped Github - index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/813a8799e465a7d5f0d6776643f20f93681e85e4/types/react/index.d.ts#L872) <br/>
[https://www.programcreek.com/typescript/?api=react.SFC](https://www.programcreek.com/typescript/?api=react.Dispatch) <br/>
[How to safely type the useReducer hook](https://www.fabiobiondi.dev/blog/2023-01/how-to-safely-type-usereducer-in-react-and-typescript) <br/>
[How to type state and dispatch for useReducer - TypeScript and React](https://stackoverflow.com/questions/59432133/how-to-type-state-and-dispatch-for-usereducer-typescript-and-react) <br/>
[https://stackoverflow.com/questions/54844839/typescript-how-to-type-the-dispatch-in-redux](https://stackoverflow.com/questions/54844839/typescript-how-to-type-the-dispatch-in-redux)

#### 🤖 Code References

[Dispatch Examples_1](https://github.com/TrueFiEng/useDApp/blob/master/packages/core/src/providers/blockNumber/common/subscribeToNewBlock.ts) <br/>
[Dispatch Examples_2](https://github.com/artifacthub/hub/blob/master/web/src/context/AppCtx.tsx) <br/>
[Dispatch Examples_3](https://github.com/geekdada/yasd/blob/master/src/models/profile.tsx)
