# 🌟 ReactElement

## 🦴 [ReactElement 구조 파악하기](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/813a8799e465a7d5f0d6776643f20f93681e85e4/types/react/index.d.ts#L142)

```ts
interface ReactElement<
  P = any,
  T extends string | JSXElementConstructor<any> =
    | string
    | JSXElementConstructor<any>
> {
  type: T;
  props: P;
  key: Key | null;
}
```

> generic 타입 매개변수

- **P**
  - React 요소의 props 타입을 나타냄
  - 기본 값으로 any가 지정되어 있으므로, 특정한 타입을 지정하지 않는 이상 모든 타입의 props 전달 가능
- **T**
  - React 요소의 타입을 나타냄
  - 기본적으로 string 또는 <code>JSXElementConstructor</code> (JSX 요소 생성자) 타입 중 하나로 지정되어 있음
  - React 요소의 태그 이름 또는 JSX 요소 생성자가 될 수 있음

> interface의 속성들

- **type**
  - React 요소의 타입을 나타냄
  - **T**에서 지정한 타입으로 설정됨 (React 요소 태그 이름 또는 JSX 요소 생성자)
  - 해당 HTML 태그의 타입을 받아옴
- **props**
  - React 요소의 속성
  - **P**에서 지정한 타입으로 설정됨 (React 요소가 가지는 모든 속성들을 포함하는 객체)
  - 그 외의 컴포넌트가 갖고 있는 속성을 받아옴
- **key**
  - React 요소의 고유 키
  - Key 타입 또는 null로 설정 됨
  - React가 컴포넌트 배열 업데이트 시 각 요소를 구별하기 위해 사용함

## 🗝️ ReactElement 사용하기

- ReactElement는 createElement 함수를 통해 생성된 객체의 타입!
- 오직 하나의 React 요소(완성된 jsx 요소)에서만 작동한다.
- 다른 모든 것에서는 작동하지 않는다. 심지어 string과 같은 원시타입에서도 작동하지 않는다!
- children을 React 요소로 제한하기에 편하지만, 일반적으로 사용하기에는 제한적이다.

> 🔎 제한적이라는게 무슨 의미냐면,,

```tsx
type ElComponentProps = {
  children: ReactElement;
};

const ElComponent = ({ children }: ElComponentProps) => {
  return <>{children}</>;
};

function COMPONENT() {
  return (
    <div>
      <ElComponent>
        <input />
      </ElComponent>
    </div>
  );
}
```

위의 경우 JSX 요소인 input 태그를 children으로 보내주기 때문에 에러가 발생하지 않는다.

```tsx
function COMPONENT() {
  return (
    <div>
      <ElComponent>Hello:) 나는 그냥 문자열</ElComponent>
    </div>
  );
}
```

하지만 그냥 문자열이라도 넣게 되면..?

<img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/6f54fb4d-e483-471a-b7b8-ca0e6c201fbc" width="50%"/>

🐟 개복치처럼 이렇게 에러를 발생시킨다.

## 🙄 JSX.Element

```tsx
// Global
declare global {
  namespace JSX {
    interface Element extends React.ReactElement<any, any> {}
  }
}
```

- JSX.Element는 ReactElement의 타입, props를 모두 any로 받아 확장한 인터페이스이다.
- ReactElement보다는 범용적으로 사용 가능!
- 하지만 내부 구조나 제약 타입이 별도로 존재하는 것은 아니라 거의 동일하다고 봐도 무방하다.
- React 관련 타입은 React의 namespace 안에 선언되어 있는 반면, JSX는 전역 namespace로 선언되어 있음
  - React와 달리 JSX를 import 하지 않아도 바로 사용 가능!

#### 🔎 References

[ReactNode, ReactChild, ReactElement 타입 비교](https://merrily-code.tistory.com/209) <br/>
[When to use JSX.Element vs ReactNode vs ReactElement?](https://stackoverflow.com/questions/58123398/when-to-use-jsx-element-vs-reactnode-vs-reactelement) <br/>
[react#ReactElement TypeScript Examples](https://www.programcreek.com/typescript/?api=react.ReactElement) <br/>

#### 🤖 Code References

[ReactElement Examples_1](https://github.com/9inpachi/react-circular-menu/blob/master/src/Tooltip/functions/tooltip-element-props.ts) <br/>
[ReactElement Examples_2](https://github.com/thu-info-community/thu-info-app/blob/master/src/components/home/icon.tsx) <br/>
[ReactElement Examples_3](https://github.com/9inpachi/react-circular-menu/blob/master/src/CircleMenu/CircleMenu.tsx) <br/>
