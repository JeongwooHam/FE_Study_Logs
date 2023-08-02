<p align="center"><img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/60d083f0-15b5-4a1e-b08c-376900f7c881"/></p>

## 🌟 React.FC

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

## 🌟 ReactNode

## 🌟 ReactElement

## 🌟 PropsWithChildren

#### 🔎 References

[ReactNode, ReactChild, ReactElement 타입 비교](https://merrily-code.tistory.com/209) <br/>
[When to use JSX.Element vs ReactNode vs ReactElement?](https://stackoverflow.com/questions/58123398/when-to-use-jsx-element-vs-reactnode-vs-reactelement) <br/>
[react#ReactNode TypeScript Examples](https://www.programcreek.com/typescript/?api=react.ReactNode) <br/>
[react#ReactElement TypeScript Examples](https://www.programcreek.com/typescript/?api=react.ReactElement) <br/>
[react#PropsWithChildren TypeScript Examples](https://www.programcreek.com/typescript/?api=react.PropsWithChildren)

## 🌟 PropsWithRef

#### 🔎 References

[DefinitelyTyped Github - index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/813a8799e465a7d5f0d6776643f20f93681e85e4/types/react/index.d.ts#L810) <br/>
[Using the React children prop with TypeScript](https://blog.logrocket.com/using-react-children-prop-with-typescript/) <br/>
[React children props with TypeScript](https://www.mendelowski.com/docs/react/children-props-with-typescript/) <br/>
[Why doesn't React.PropsWithRef<P> add 'ref' property?](https://stackoverflow.com/questions/66389272/why-doesnt-react-propswithrefp-add-ref-property) <br/>
[React.PropsWithChildren with no props other than `children`?](https://stackoverflow.com/questions/65548388/react-propswithchildren-with-no-props-other-than-children) <br/>
[Ref as prop in Typescript in react](https://stackoverflow.com/questions/70992807/ref-as-prop-in-typescript-in-react)

## 🌟 RefObject

#### 🔎 References

[Using React Refs in Typescript](https://www.pluralsight.com/guides/using-react-refs-typescript) <br/>
[TypeScript/React: what does the RefObject<HTMLElement> datatype refer to?](https://stackoverflow.com/questions/71174649/typescript-react-what-does-the-refobjecthtmlelement-datatype-refer-to) <br/>
[DefinitelyTyped Github - index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/813a8799e465a7d5f0d6776643f20f93681e85e4/types/react/index.d.ts#L84-L86)

## 🌟 SetStateAction

#### 🔎 References

[DefinitelyTyped Github - index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/813a8799e465a7d5f0d6776643f20f93681e85e4/types/react/index.d.ts#L869) <br/>
[react#SetStateAction TypeScript Examples](https://www.programcreek.com/typescript/?api=react.SetStateAction) <br/>
[react typescript what type is setState?](https://stackoverflow.com/questions/64082847/react-typescript-what-type-is-setstate)

## 🌟 Dispatch

#### 🔎 References

[DefinitelyTyped Github - index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/813a8799e465a7d5f0d6776643f20f93681e85e4/types/react/index.d.ts#L872) <br/>
[https://www.programcreek.com/typescript/?api=react.SFC](https://www.programcreek.com/typescript/?api=react.Dispatch) <br/>
[How to safely type the useReducer hook](https://www.fabiobiondi.dev/blog/2023-01/how-to-safely-type-usereducer-in-react-and-typescript) <br/>
[How to type state and dispatch for useReducer - TypeScript and React](https://stackoverflow.com/questions/59432133/how-to-type-state-and-dispatch-for-usereducer-typescript-and-react) <br/>
[https://stackoverflow.com/questions/54844839/typescript-how-to-type-the-dispatch-in-redux](https://stackoverflow.com/questions/54844839/typescript-how-to-type-the-dispatch-in-redux)

## 🌟 type alias와 interface의 차이를 이해하여 props 타입을 정의해보자

### 🧐 Type Alias VS. Interface

#### 🔎 References

[React+TypeScript Cheatsheets - types or interfaces](https://github.com/typescript-cheatsheets/react#types-or-interfaces) <br/>
[TS Documentation - Differences Between Type Aliases and Interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces) <br/>
[TypeScript React props: interfaces vs type aliases](https://www.benmvp.com/blog/typescript-react-props-interfaces-type-aliases/) <br/>
[[Typescript] Type Alias vs Interface](https://abangpa1ace.tistory.com/entry/Typescript-Type-Alias-vs-Interface#google_vignette)
