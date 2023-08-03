# 🌟 ReactElement

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

#### 🔎 References

[ReactNode, ReactChild, ReactElement 타입 비교](https://merrily-code.tistory.com/209) <br/>
[When to use JSX.Element vs ReactNode vs ReactElement?](https://stackoverflow.com/questions/58123398/when-to-use-jsx-element-vs-reactnode-vs-reactelement) <br/>
[react#ReactElement TypeScript Examples](https://www.programcreek.com/typescript/?api=react.ReactElement) <br/>

#### 🤖 Code References

[ReactElement Examples_1](https://github.com/9inpachi/react-circular-menu/blob/master/src/Tooltip/functions/tooltip-element-props.ts) <br/>
[ReactElement Examples_2](https://github.com/thu-info-community/thu-info-app/blob/master/src/components/home/icon.tsx) <br/>
[ReactElement Examples_3](https://github.com/9inpachi/react-circular-menu/blob/master/src/CircleMenu/CircleMenu.tsx) <br/>
