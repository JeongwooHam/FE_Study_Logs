# 🌟 SetStateAction

## 🦴 [SetStateAction 구조 파악하기](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/813a8799e465a7d5f0d6776643f20f93681e85e4/types/react/index.d.ts#L869)

```ts
// Unlike the class component setState, the updates are not allowed to be partial
type SetStateAction<S> = S | ((prevState: S) => S);
```

> S

- S 자체가 직접적인 업데이트를 나타내는 값이 될 수 있다.
- <code>setState(value)</code> 처럼 값이 직접 변경되는 경우를 의미한다.

> ((prevState: S) => S)

- 상태를 업데이트하는 함수를 의미한다.
- 이전 상태인 **prevState** 를 인자로 받아 새로운 상태 **S**를 반환한다.
- <code>setState((prev) => !prev)</code> 와 같은 경우 사용된다.

## 🗝️ SetStateAction 사용하기

#### 🔎 References

[react typescript what type is setState?](https://stackoverflow.com/questions/64082847/react-typescript-what-type-is-setstate)

#### 🤖 Code References

[SetStateAction Examples_1](https://github.com/jhackshaw/iplocate/blob/master/frontend/src/hooks/usePersistentState.ts) <br/>
[SetStateAction Examples_2](https://github.com/geist-org/geist-ui/blob/master/components/use-current-state/use-current-state.ts) <br/>
[SetStateAction Examples_3](https://github.com/openshift-assisted/assisted-installer-ui/blob/master/libs/ui-lib/lib/common/hooks/useStateSafely.ts)
[SetStateAction Examples_4](https://github.com/Suwayomi/Tachidesk-WebUI/blob/master/src/util/useLocalStorage.tsx)
