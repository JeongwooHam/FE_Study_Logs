# 🌟 SetStateAction

```ts
// Unlike the class component setState, the updates are not allowed to be partial
type SetStateAction<S> = S | ((prevState: S) => S);
```

#### 🔎 References

[DefinitelyTyped Github - index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/813a8799e465a7d5f0d6776643f20f93681e85e4/types/react/index.d.ts#L869) <br/>
[react#SetStateAction TypeScript Examples](https://www.programcreek.com/typescript/?api=react.SetStateAction) <br/>
[react typescript what type is setState?](https://stackoverflow.com/questions/64082847/react-typescript-what-type-is-setstate)
