# 🌟 RefObject

## 🦴 [RefObject 구조 파악하기](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/813a8799e465a7d5f0d6776643f20f93681e85e4/types/react/index.d.ts#L84)

```ts
interface RefObject<T> {
  readonly current: T | null;
}
```

- generic **T**를 받아온다.
- current라는 읽기 전용 속성을 가지는데, 이는 **T** 타입 또는 **null** 이 될 수 있음
- useRef를 사용할 때, 변수명.current로 사용했던 것을 생각해보면 이해하기 쉽다.
- 만약 current가 **null** 이라면, 참조된 요소가 아직 생성되지 않았다고 추론 가능하다.

> readonly

- React에서 ref는 주로 컴포넌트 또는 DOM 요소에 대한 참조를 위해 사용된다.
- 이 참조는 컴포넌트 렌더링 및 생명 주기에 관련될 수 있으므로 한 번 생성된 후 다른 값이 할당되면 안 된다.
- 따라서 current 값을 **readonly**로 선언해줌으로써, 참조가 한 번 생성되면 이후 해당 참조를 변경하지 못하도록 막는다.
- 또한 컴포넌트 간에 참조를 공유하더라도 의도치 않은 변경을 막을 수 있다.
- 이를 통해 참조의 불변성과 안정성을 지킬 수 있다!

## 🗝️ RefObject 사용하기

#### 🔎 References

[TypeScript React에서 useRef의 3가지 정의와 각각의 적절한 사용법](https://driip.me/7126d5d5-1937-44a8-98ed-f9065a7c35b5) <br/>
[TypeScript/React: what does the RefObject<HTMLElement> datatype refer to?](https://stackoverflow.com/questions/71174649/typescript-react-what-does-the-refobjecthtmlelement-datatype-refer-to) <br/>
[How to use refs in React with Typescript](https://stackoverflow.com/questions/33796267/how-to-use-refs-in-react-with-typescript)

#### 🤖 Code References

[RefObject Examples_1](https://github.com/revoltchat/revite/blob/master/src/lib/TextAreaAutoSize.tsx) <br/>
[RefObject Examples_2](https://github.com/rick-you/remind/blob/master/packages/core/src/view/Mindmap.tsx) <br/>
[RefObject Examples_3](https://github.com/Anchor-Protocol/anchor-web-app/blob/master/app/src/%40libs/use-state-ref/index.ts)
