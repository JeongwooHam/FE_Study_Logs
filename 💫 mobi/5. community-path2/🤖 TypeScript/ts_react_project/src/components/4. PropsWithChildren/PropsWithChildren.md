# 🌟 PropsWithChildren

## 🦴 PropsWithChildren 구조 파악하기

```ts
type PropsWithChildren<P> = P & { children?: ReactNode };
```

1. generic 타입 매개변수 **P**를 받아온다
2. 해당 타입에 ReactNode 타입의 children 속성을 추가해준다.

## 🗝️ PropsWithChildren 사용하기

- 문자 그대로 children을 포함한 props를 가리키는 타입이다.
- 직접 children의 타입으로 명시해주어야했던 ReactNode와는 다르게 children의 타입을 설정해줄 필요가 없다.

> 🚨 하지만 children이 optional이다!

- 그래서 children이 존재하지 않더라도 에러가 발생하지 않는다.
- 이는 암시적으로 children props을 받아와 사용이 지양되었던 React.FC의 과거 문제점과 유사한 점이 있다.
- 이 때문에 PropsWithChildren이 편리하기는 하지만, children의 존재 여부가 선택적일 때만 사용하는 것이 좋겠다.

#### 🔎 References

[React.PropsWithChildren with no props other than `children`?](https://stackoverflow.com/questions/65548388/react-propswithchildren-with-no-props-other-than-children) <br/>

#### 🤖 Code References

[PropsWithChildren Examples_1](https://github.com/ChainSafe/metamask-snap-polkadot/blob/master/packages/example/src/context/metamask.tsx) <br/>
[PropsWithChildren Examples_2](https://github.com/PacktPublishing/Full-Stack-React-TypeScript-and-Node/blob/master/Chap12/super-forum-client/src/components/editor/RichTextControls.tsx) <br/>
[PropsWithChildren Examples_3](https://github.com/aqualinkorg/aqualink-app/blob/master/packages/website/src/common/Delayed/index.tsx)
