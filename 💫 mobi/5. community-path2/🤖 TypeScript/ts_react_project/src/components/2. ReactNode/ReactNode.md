# 🌟 ReactNode

## 🦴 ReactNode 구조 파악하기

```tsx
type ReactNode =
  | ReactChild
  | ReactFragment
  | ReactPortal
  | boolean
  | null
  | undefined;
```

- ReactNode는 ReactChild, ReactFragment, ReactPortal, boolean, null 또는 undefined 중 하나가 되는 타입이다.

## 🗝️ ReactNode 사용하기

- 모든 것을 허용하기 때문에 children 속성의 타입으로 가장 많이 사용하는 타입이다.
- JSX.Element와 다르게 element, 원시값, portal, fragment 등등을 모두 받을 수 있다.
- 클래스 컴포넌트의 <code>render()</code>가 기본적으로 리턴하는 타입

> 🤔 원시값은 허용되지 않는 것 아닌가?

- string, number은 <code>ReactChild</code>에 포함되어 있다.
- ReactChild
  ```
  - ReactNode의 타입을 적절히 제한한 타입
  - React 요소 객체 + 원시 타입 리터럴까지는 허용한다.
  ```

#### 🔎 References

- [Using React children prop with TypeScript](https://isamatov.com/react-typescript-children-prop/)
- [ReactNode, ReactChild, ReactElement 타입 비교](https://merrily-code.tistory.com/209) <br/>
- [When to use JSX.Element vs ReactNode vs ReactElement?](https://stackoverflow.com/questions/58123398/when-to-use-jsx-element-vs-reactnode-vs-reactelement) <br/>

#### 🤖 Code References

- [ReactNode Examples_1](https://github.com/firecmsco/firecms/blob/main/lib/src/firebase_app/components/FirebaseLoginView.tsx) <br/>
- [ReactNode Examples_2](https://github.com/DottieDot/GTAV-NativeDB/blob/master/src/Theme.tsx) <br/>
- [ReactNode Examples_3](https://github.com/FrontEnd-ro/frontend.ro/blob/master/client/components/SubscribeForm/SubscribeFormWithText.tsx) <br/>
