# 🌟 SetStateAction

```ts
// Unlike the class component setState, the updates are not allowed to be partial
type SetStateAction<S> = S | ((prevState: S) => S);
```

#### 🔎 References

[DefinitelyTyped Github - index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/813a8799e465a7d5f0d6776643f20f93681e85e4/types/react/index.d.ts#L869) <br/>
[react typescript what type is setState?](https://stackoverflow.com/questions/64082847/react-typescript-what-type-is-setstate)

#### 🤖 Code References

[SetStateAction Examples_1](https://github.com/jhackshaw/iplocate/blob/master/frontend/src/hooks/usePersistentState.ts) <br/>
[SetStateAction Examples_2](https://github.com/geist-org/geist-ui/blob/master/components/use-current-state/use-current-state.ts) <br/>
[SetStateAction Examples_3](https://github.com/openshift-assisted/assisted-installer-ui/blob/master/libs/ui-lib/lib/common/hooks/useStateSafely.ts)
[SetStateAction Examples_4](https://github.com/Suwayomi/Tachidesk-WebUI/blob/master/src/util/useLocalStorage.tsx)
