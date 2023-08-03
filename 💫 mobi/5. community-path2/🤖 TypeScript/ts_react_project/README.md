<p align="center"><img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/60d083f0-15b5-4a1e-b08c-376900f7c881"/></p>

### 🌟 [React.FC](https://github.com/JeongwooHam/FE_Study_Logs/tree/master/%F0%9F%92%AB%20mobi/5.%20community-path2/%F0%9F%A4%96%20TypeScript/ts_react_project/src/components/React.FC)

## 🤔 React의 Children Props를 TS에서 어떻게 구현할 수 있을까?

### 🙄 JSX.Element

    - React에서는 항상 JSX로 컴포넌트를 구현했기 때문에 가장 익숙해 보이지만 사실 children에 사용할 수 있는 타입 중 가장 제한적인 타입이다!
    - 오직 하나의 React 요소일 때만 작동한다.
    - 다른 모든 것에서는 작동하지 않는다. 심지어 string과 같은 원시타입에서도 작동하지 않는다!
    - children을 React 요소로 제한하기에 편하지만, 일반적으로 사용하기에는 너무 제한적이다.

> 🔎 제한적이라는게 무슨 의미냐면,,

<details>
<summary>예시로 알아보기</summary>
<div markdown="1">

```tsx
type JSXComponentProp = {
  children: JSX.Element;
};

const JSXComponent = (prop: JSXComponentProp) => {
  return <>{prop.children}</>;
};

function COMPONENT() {
  return (
    <div>
      <JSXComponent>
        <input />
      </JSXComponent>
    </div>
  );
}
```

위의 경우 JSX 요소인 input 태그를 children으로 보내주기 때문에 에러가 발생하지 않는다.

```tsx
function COMPONENT() {
  return (
    <div>
      <JSXComponent>Hello:) 나는 그냥 문자열</JSXComponent>
    </div>
  );
}
```

하지만 그냥 문자열이라도 넣게 되면..?

<img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/707d927b-d4ed-4db9-9349-072d6f5411fb" width="50%"/>

🐟 개복치처럼 이렇게 에러를 발생시킨다.

</div>
</details>

<br/>

### 🧐 그러면 무엇을 쓰면 좋을까?

이때 사용할 수 있는 것이 바로 아래의 두 타입이다.

### 🌟 [ReactNode](https://github.com/JeongwooHam/FE_Study_Logs/tree/master/%F0%9F%92%AB%20mobi/5.%20community-path2/%F0%9F%A4%96%20TypeScript/ts_react_project/src/components/ReactNode)

### 🌟 [ReactElement](https://github.com/JeongwooHam/FE_Study_Logs/tree/master/%F0%9F%92%AB%20mobi/5.%20community-path2/%F0%9F%A4%96%20TypeScript/ts_react_project/src/components/ReactElement)

<hr/>

### 🌟 [PropsWithChildren](https://github.com/JeongwooHam/FE_Study_Logs/tree/master/%F0%9F%92%AB%20mobi/5.%20community-path2/%F0%9F%A4%96%20TypeScript/ts_react_project/src/components/PropsWithChildren)

### 🌟 [PropsWithRef](https://github.com/JeongwooHam/FE_Study_Logs/tree/master/%F0%9F%92%AB%20mobi/5.%20community-path2/%F0%9F%A4%96%20TypeScript/ts_react_project/src/components/PropsWithRef)

### 🌟 [RefObject](https://github.com/JeongwooHam/FE_Study_Logs/tree/master/%F0%9F%92%AB%20mobi/5.%20community-path2/%F0%9F%A4%96%20TypeScript/ts_react_project/src/components/RefObject)

### 🌟 [SetStateAction](https://github.com/JeongwooHam/FE_Study_Logs/tree/master/%F0%9F%92%AB%20mobi/5.%20community-path2/%F0%9F%A4%96%20TypeScript/ts_react_project/src/components/SetStateAction)

### 🌟 [Dispatch](https://github.com/JeongwooHam/FE_Study_Logs/tree/master/%F0%9F%92%AB%20mobi/5.%20community-path2/%F0%9F%A4%96%20TypeScript/ts_react_project/src/components/Dispatch)

### 🌟 [type alias와 interface의 차이를 이해하여 props 타입을 정의해보자](https://github.com/JeongwooHam/FE_Study_Logs/tree/master/%F0%9F%92%AB%20mobi/5.%20community-path2/%F0%9F%A4%96%20TypeScript/ts_react_project/src/components/TypeAlias%2C%20Interface)
