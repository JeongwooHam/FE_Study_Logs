# 🌟 PropsWithRef

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

#### 🔎 References

[DefinitelyTyped Github - index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/813a8799e465a7d5f0d6776643f20f93681e85e4/types/react/index.d.ts#L810) <br/>
[Using the React children prop with TypeScript](https://blog.logrocket.com/using-react-children-prop-with-typescript/) <br/>
[React children props with TypeScript](https://www.mendelowski.com/docs/react/children-props-with-typescript/) <br/>
[Why doesn't React.PropsWithRef<P> add 'ref' property?](https://stackoverflow.com/questions/66389272/why-doesnt-react-propswithrefp-add-ref-property) <br/>
[React.PropsWithChildren with no props other than `children`?](https://stackoverflow.com/questions/65548388/react-propswithchildren-with-no-props-other-than-children) <br/>
[Ref as prop in Typescript in react](https://stackoverflow.com/questions/70992807/ref-as-prop-in-typescript-in-react)
