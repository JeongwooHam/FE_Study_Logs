# 🌟 React.FC

## 🦴 React.FC 구조 파악하기

### 📌 FunctionComponent

```ts
interface FunctionComponent<P = {}> {
  (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
  propTypes?: WeakValidationMap<P>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<P>;
  displayName?: string;
}
```

- React 함수형 컴포넌트 타입
- props(P)와 context를 입력으로 받아 ReactElement 또는 null을 반환한다.
- <code><P = {}></code>
  - props 타입을 지정하는 제네릭 타입 매개변수
  - 기본값으로 빈 객체가 설정되어 있다.

> props: PropsWithChildren

- **P** 타입에 **children** 속성이 포함된 타입 (React 18 전까지)
- 뒤에서 더 자세히 다루겠지만, React 18부터 FC는 기본적으로 children을 가지지 않도록 변경되었다.

> context

- <code>useContext</code> 에서 사용하던 그 context!
- React의 Context API를 통해 전역으로 데이터를 전달하거나 공유할 수 있게 해준다.
- 컴포넌트 계층 구조를 따라 props로 데이터를 일일이 넘기지 않아도 컴포넌트 간 데이터 공유를 가능케 한다.
- <code>useContext</code> , <code>Context.Consumer</code> 를 통해 context의 값을 읽어올 수 있다.

> propTypes, contextTypes

- 함수형 컴포넌트가 받아올 props/context의 유효성 검사
- 주로 개발 환경에서, 컴포넌트에 전달되는 props/context의 타입 검사 후 잘못된 타입이 전달되면 에러 메세지를 출력한다.

> defaultProps

- 함수형 컴포넌트에 기본적으로 제공되는 props의 값들을 설정할 때 사용된다.
- 부모 컴포넌트에서 특정 props를 제공하지 않았을 때, defaultProps에 지정된 값으로 대체된다.
- 하지만 클래스 컴포넌트 방식으로 defaultProps를 따로 지정해주기 보다는 구조 분해 할당 시 default Parameters를 지정해주는 방식이 함수형 컴포넌트 구현에 더 좋다.

> displayName

- 컴포넌트의 이름을 지정할 때 사용된다.
- 개발 환경에서 디버깅 시 컴포넌트의 이름을 표시하기 위해 주로 사용한다.

### 📌 FC

```ts
type FC<P = {}> = FunctionComponent<P>;
```

- FunctionComponent의 축약어
- 함수형 컴포넌트 정의 시 주로 사용되며, FunctionComponent `<P>` 와 동일한 역할을 수행한다.

### 📌 SFC

```ts
/**
 * @deprecated as of recent React versions, function components can no
 * longer be considered 'stateless'. Please use `FunctionComponent` instead.
 */
type StatelessComponent<P = {}> = FunctionComponent<P>;
```

- 이전 버전의 React에서 사용되었던 것으로, 현재는 FunctionComponent로 대체된다.
- React의 이전 버전에서 함수형 컴포넌트는 주로 상태가 없는 컴포넌트로 사용되었다.
  - 클래스 컴포넌트와 달리 내부적으로 상태를 갖지 않고, props만을 이용해서 렌더링을 수행하는 역할이었다.
- 그러나, 최근 React버전에서는 useState처럼 함수형 컴포넌트 내에서도 상태를 관리할 수 있는 기능들이 추가되었다.
  - 함수형 컴포넌트가 '상태가 없는' 컴포넌트라는 개념이 혼동을 줄 여지가 있었다!
  - 이에 따라 최근 React에서는 함수형 컴포넌트를 StatelessComponent 대신 FunctionComponent 등으로 함수형 컴포넌트를 정의하도록 하였다. ([관련 PR](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/30364))

### 📌 VFC

```ts
/**
 * @deprecated - Equivalent with `React.FunctionComponent`.
 */
interface VoidFunctionComponent<P = {}> {
  (props: P, context?: any): ReactElement<any, any> | null;
  propTypes?: WeakValidationMap<P>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<P>;
  displayName?: string;
}
/**
 * @deprecated - Equivalent with `React.FC`.
 */
type VFC<P = {}> = VoidFunctionComponent<P>;
```

- FunctionComponent와 달리 props **P** 만을 입력으로 받아온다는 점에서 FC와 차이를 가졌다.
- 하지만 React 18부터 React.FC가 children을 기본적으로 가지지 않도록 변경되었다.
- 사실상 React.FC와 동일한 타입이 되었기 때문에 deprecated 되었다. ([관련 PR](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/59882))

<br/>

## 🗝️ React.FC 사용하기

### 👾 함수형 컴포넌트 타이핑하기

- React는 TS로 작성되어 있지 않다.
  - React 커뮤니티에서는 <code>@types/react</code> 패키지를 통한 React 타이핑을 지원한다.
  - 이 패키지의 `<FC>` generic을 활용해 함수형 컴포넌트 타이핑이 가능하다.

```tsx
import { FC } from "react";

type UserProps = {
  name: string;
  cart: string[];
};

const UserBox: FC<UserProps> = ({ name, cart }) => {
  return (
    <div>
      <div>name: {name}</div>
      <div>cart: {cart.length}</div>
    </div>
  );
};
```

### 🚨 기명함수에 대해서는 React.FC를 사용할 수 없다!

```tsx
// 1. 익명 함수를 변수에 할당하여 타이핑하기
const UserBox: FC<UserProps> = function ({ name, cart }) {
  return ( ... );
};

// 2. 화살표 함수 사용하기
const UserBox = FC<UserProps> = ({name, cart}) => {
  return (...) ;
}
```

- 위의 두 예시에서 알 수 있듯, React.FC로는 익명 함수만 타이핑할 수 있다.
- 따라서, 기명함수를 작성하기 위해서는 아래와 같은 방법을 사용해야 한다.

```tsx
function UserBox({name, cart} : UserProps) {
  return (...)
}
```

### 🚨 generic을 지원하지 않는다!

```tsx
type UserGeneric<T> = {
  name: string;
  cart: T;
};

const UserBoxWithGeneric: <T>(props: UserGeneric<T>) => {};
```

위처럼 generic을 사용하는 컴포넌트를 React.FC에서는 어떻게 작성할 수 있을까?

> 🤗 **없다!**

사실 엄청 간단한 이유인데,

```tsx
const UserBoxWithGenericAndFC: React.FC</*...*/> = <T,>(
  props: UserGeneric<T>
) => {};
```

위처럼 generic 문법을 사용한 React.FC 컴포넌트를 만들 경우, 컴포넌트에 generic 값을 전달할 수 있는 방법이 따로 없기 때문이다.

## 💫 React.FC의 과거와 현재

### 🧐 React 18버전 이전까지 FC 사용을 지양했던 이유는?

#### 🚨 children prop이 암시적이었음

- React 18 버전으로 업데이트 되기 전, React.FC는 type이 <code>ReactNode</code>인 children을 암시적으로 가졌다.

- 원래 TS의 의도대로라면, React.FC를 사용하지 않은 아래의 방법처럼 children을 다루고 있지 않은 컴포넌트에 children을 넘겨줄 경우 에러로 처리해야 했다.

```tsx
function UserBox2({ name }: { name: string; cart: number }) {
  return (
    <h1>
      {name}: {cart}
    </h1>
  );
}
const App = () => (
  <>
    <UserBox2 name="Stefan">
      <span>{"I can set this element but it doesn't do anything"}</span>
    </UserBox2>
  </>
);
```

<img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/7d88b50e-7d9d-427c-b240-1423604720fd" width="50%"/>

<br/>

```tsx
const UserBox: FC<UserProps> = ({ name, cart }) => {
  return (
    <h1>
      {name}: {cart}
    </h1>
  );
};

const App = () => (
  <>
    <UserBox name="Stefan">
      <span>{"I can set this element but it doesn't do anything"}</span>
    </UserBox>
  </>
);
```

- 하지만 이렇게 다루고 있지 않은 children을 App에서 UserBox로 넘겨주더라도 어떠한 런타임 에러도 발생하지 않았다.
- 이는 FC 타입에서 children이 optional 속성으로 정의되어 있었기 때문에 발생한 문제!
- 최소한 컴포넌트에 children의 존재가 가능한지 여부조차 파악할 수 없게 하였으므로, TS를 사용하는 목적과 부합하지 않았다고 할 수 있다.
- 따로 children의 필요 여부를 알릴 수 없는 것은, 모든 개발자가 해당 컴포넌트의 특징을 알고 있지 않는 한 협업에도 좋지 않다.

<br/>

> 🤖 **이러한 이유로, CRA에서는 React.FC를 사용하지 않기로 결정했다.**

[관련 PR](https://github.com/facebook/create-react-app/pull/8177)

### 🧐 그렇다면 이제 다시 사용할 수 있는 이유는 무엇일까?

#### ✂️ React.FC 타입에서 암묵적인 children 선언이 제거되었다!

[관련 PR](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/56210)

- 이전처럼 children을 정의하지 않고 사용한 경우 에러가 발생한다.

<img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/384fd56a-4011-422f-a320-0acb904921ad" width="50%">

- 자식을 매번 선언해주어야 한다는 점에서 복잡해졌다고 생각할 수도 있지만, <br/>
  타입에 자식 노드가 꼭 필요한데 넣지 않았을 경우, 혹은 그 반대의 경우를 잡아내지 못했던 과거의 React.FC 보다는 명시적으로 선언해주는 것이 타입의 관점에서 더 좋아 보인다.
- children을 명시적으로 선언하려면 아래와 같이 사용해줄 수 있다.

```tsx
type Props = {
  children: React.ReactNode;
};

const CodeSnippet: React.FC<Props> = ({ children }) => <div>{children}</div>;
```

<br/>

#### 🔎 References

- [React.FC를 사용하지 않는 이유](https://yceffort.kr/2022/03/dont-use-react-fc) <br/>
- [React.FC 사용 지양하기](https://velog.io/@yena1025/FunctionComponent-FC-%EC%82%AC%EC%9A%A9-%EC%A4%84%EC%9D%B4%EA%B8%B0-24jhm0wp) <br/>
- [리액트에서 FC를 사용하지 말아야 하는 이유](https://emewjin.github.io/why-not-fc/)
- [리액트 18의 타입스크립트 타입 변경점](https://blog.shiren.dev/2022-04-28/) <br/>
- [React18 - Remove implicityly typed children](https://flowergeoji.me/react/remove-implicitly-typed-children/) <br/>

#### 🤖 Code References

- [React.FC Examples_1](https://github.com/9inpachi/react-circular-menu/blob/master/src/CircleButton/CircleButton.tsx) <br/>
- [React.FC Examples_2](https://github.com/Joystream/atlas/blob/master/packages/atlas/src/components/EmptyFallback/EmptyFallback.tsx) <br/>
- [React.FC Examples_3](https://github.com/nick-keller/react-datasheet-grid/blob/master/src/components/Cell.tsx) <br/>
