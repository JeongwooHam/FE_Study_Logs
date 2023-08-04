# 🌟 PropsWithRef

## 🦴 PropsWithRef 구조 파악하기

```ts
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

#### 🔎 References

[DefinitelyTyped Github - index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/813a8799e465a7d5f0d6776643f20f93681e85e4/types/react/index.d.ts#L810) <br/>
[Using the React children prop with TypeScript](https://blog.logrocket.com/using-react-children-prop-with-typescript/) <br/>
[React children props with TypeScript](https://www.mendelowski.com/docs/react/children-props-with-typescript/) <br/>
[Why doesn't React.PropsWithRef<P> add 'ref' property?](https://stackoverflow.com/questions/66389272/why-doesnt-react-propswithrefp-add-ref-property) <br/>
[Ref as prop in Typescript in react](https://stackoverflow.com/questions/70992807/ref-as-prop-in-typescript-in-react)

#### 🤖 Code References

[PropsWithRef Examples_1](https://github.com/rylnd/kibana/blob/757c881b9a845dd438c16f1eca915c1e522fcd5d/x-pack/plugins/spaces/public/ui_api/lazy_wrapper.tsx#L8) <br/>
[PropsWithRef Examples_2](https://github.com/meehawk/kibana/blob/master/x-pack/plugins/spaces/public/ui_api/components.tsx)
