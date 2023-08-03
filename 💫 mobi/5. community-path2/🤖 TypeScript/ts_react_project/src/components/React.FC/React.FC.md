# 🌟 React.FC

### FunctionComponent

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
- props(P)와 context를 입력으로 받아 ReactElement 또는 null 반환

> propTypes

- 함수형 컴포넌트가 받아올 props의 유효성 검사
- 주로 개발 환경에서, 컴포넌트에 전달되는 props의 타입 검사 후 잘못된 타입이 전달되면 에러 메세지 출력

<br/>

### FC

```ts
type FC<P = {}> = FunctionComponent<P>;
```

- FunctionComponent의 축약어
- 함수형 컴포넌트 정의 시 주로 사용되며, FunctionComponent<P>와 동일한 역할 수행

<br/>

### SFC

```ts
/**
 * @deprecated as of recent React versions, function components can no
 * longer be considered 'stateless'. Please use `FunctionComponent` instead.
 */
type StatelessComponent<P = {}> = FunctionComponent<P>;
```

- 이전 버전의 React에서 사용되었던 것으로, 현재는 FunctionComponent로 대체됨
- React의 이전 버전에서 함수형 컴포넌트는 주로 상태가 없는 컴포넌트로 사용되었음
  - 클래스 컴포넌트와 달리 내부적으로 상태를 갖지 않고, props만을 이용해서 렌더링을 수행하는 역할이었음
- 그러나, 최근 React버전에서는 useState처럼 함수형 컴포넌트 내에서도 상태를 관리할 수 있는 기능들이 추가되었음
  - 함수형 컴포넌트가 '상태가 없는' 컴포넌트라는 개념이 더이상 적절하지 않음
  - 이에 따라 최근 React에서는 함수형 컴포넌트를 '상태를 가질 수 있는' 컴포넌트로 인식하고, StatelessComponent 대신 FunctionComponent 등으로 함수형 컴포넌트를 정의하도록 함

<br/>

### VFC

```ts
interface VoidFunctionComponent<P = {}> {
  (props: P, context?: any): ReactElement<any, any> | null;
  propTypes?: WeakValidationMap<P>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<P>;
  displayName?: string;
}

type VFC<P = {}> = VoidFunctionComponent<P>;
```

<br/>

#### 🔎 References

[react#FC TypeScript Examples](https://www.programcreek.com/typescript/?api=react.FC) <br/>
[react#VFC TypeScript Examples](https://www.programcreek.com/typescript/?api=react.VFC) <br/>
[react#SFC TypeScript Examples](https://www.programcreek.com/typescript/?api=react.SFC)

### 🧐 React 18버전 이전까지 FC 사용을 지양했던 이유는?

#### 🔎 References

[React.FC를 사용하지 않는 이유](https://yceffort.kr/2022/03/dont-use-react-fc) <br/>
[React.FC 사용 지양하기](https://velog.io/@yena1025/FunctionComponent-FC-%EC%82%AC%EC%9A%A9-%EC%A4%84%EC%9D%B4%EA%B8%B0-24jhm0wp) <br/>
[Why you probably shouldn’t use React.FC to type your React components](https://medium.com/raccoons-group/why-you-probably-shouldnt-use-react-fc-to-type-your-react-components-37ca1243dd13) <br/>
[Remove React.FC from TS template](https://github.com/facebook/create-react-app/pull/8177)

### 🧐 그렇다면 이제 다시 사용할 수 있는 이유는 무엇일까?

#### 🔎 References

[React 18 types](https://github.com/DefinitelyTyped/DefinitelyTyped/pull/56210) <br/>
[리액트 18의 타입스크립트 타입 변경점](https://blog.shiren.dev/2022-04-28/) <br/>
[React18 - Remove implicityly typed children](https://flowergeoji.me/react/remove-implicitly-typed-children/) <br/>
[Since TypeScript 5.1, React.FC is now "fine"](https://www.totaltypescript.com/you-can-stop-hating-react-fc)

### 🧐 만약 FC를 사용할 수 없는 환경이라면 이유는 무엇이고 어떻게 대처가 가능할까?

#### 🔎 References

[TypeScript React.FC<Props> confusion](https://stackoverflow.com/questions/59988667/typescript-react-fcprops-confusion) <br/>
[The Better Way to Type React Components](https://blog.variant.no/a-better-way-to-type-react-components-9a6460a1d4b7) <br/>
[React.FC is fixed?](https://dev.to/asciibi/reactfc-is-fixed-5ckn)

React.FC 타입은 React 16.8 버전부터 도입되었기 때문에, 이전 버전의 React에서는 사용할 수 없습니다. 또한, React.FC는 React.createElement 함수를 사용할 수 있는 환경에서만 사용할 수 있습니다. 따라서, React.createElement 함수를 사용할 수 없는 환경에서는 React.FC 타입을 사용할 수 없습니다.

특정 TypeScript 버전: 일부 오래된 TypeScript 버전에서는 React.FC의 지원이 부족하거나 없을 수 있습니다. 따라서 최신 버전의 TypeScript를 사용하는 것이 좋습니다.
커스텀 설정된 TypeScript 컴파일러 옵션: 일부 커스텀 설정된 TypeScript 컴파일러 옵션에서는 React.FC를 인식하지 못할 수 있습니다. 이 경우, 컴파일러 옵션을 확인하고 수정해야 할 수 있습니다.
다른 라이브러리와 충돌: 일부 라이브러리는 React.FC와 충돌이 일어날 수 있습니다. 이러한 경우에는 React.FunctionComponent를 대신 사용할 수 있습니다.
