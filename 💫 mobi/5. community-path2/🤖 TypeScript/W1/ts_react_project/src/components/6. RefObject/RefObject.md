# 🌟 RefObject

## 🦴 [RefObject 구조 파악하기](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/813a8799e465a7d5f0d6776643f20f93681e85e4/types/react/index.d.ts#L84)

```ts
interface RefObject<T> {
  readonly current: T | null;
}
```

- generic **T**를 받아온다.
- current라는 읽기 전용 속성을 가지는데, 이는 **T** 타입 또는 **null** 이 될 수 있음
- useRef를 사용할 때, 변수명.current로 사용했던 것을 생각해보면 이해하기 쉽다.
- 만약 current가 **null** 이라면, 참조된 요소가 아직 생성되지 않았다고 추론 가능하다.

> readonly

- React에서 ref는 주로 컴포넌트 또는 DOM 요소에 대한 참조를 위해 사용된다.
- 이 참조는 컴포넌트 렌더링 및 생명 주기에 관련될 수 있으므로 한 번 생성된 후 다른 값이 할당되면 안 된다.
- 따라서 current 값을 **readonly**로 선언해줌으로써, 참조가 한 번 생성되면 이후 해당 참조를 변경하지 못하도록 막는다.
- 또한 컴포넌트 간에 참조를 공유하더라도 의도치 않은 변경을 막을 수 있다.
- 이를 통해 참조의 불변성과 안정성을 지킬 수 있다!

## 🗝️ RefObject 사용하기

### 🤖 TypeScript에서 useRef를 사용하는 방법

> 값을 저장하고 싶을 때

- useState와 다르게 변화할 때마다 리렌더링을 발생시키지 않는 상태를 정의하기 위해 사용하는 경우 사용한다.
- .current 프로퍼티를 수정하는 것은 리렌더링을 발생시키기 않기 때문에 로컬 변수 용도로 사용할 수 있다.

```tsx
const CountWithoutRendering = useRef<number>(0)

const handleCount = () => {
  CountWithoutRendering.current += 1
}

...

return (<><button onClick=(() => handleCount())>ADD</button></>)
```

- 이떄의 ref 객체는 React.MutableRefObject<T> 타입이다.

<img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/45aebb21-2ebc-499f-849e-70fa674bece8" width="30%"/>

- 이때의 ref객체.current는 수정이 가능한 값이다.

> DOM을 취득하고 싶을 때

```tsx
const MyInput = useRef<HTMLInputElement>(null);
```

- 이때의 Ref 객체 타입이 바로 **_refObject_** 타입이다.
- 인자의 타입이 null을 허용할 경우 반환되는 값이라고 한다.
- 위의 상황에서 ref의 초기값이 null인 이유는, 아직 화면 렌더링 전이라 return 부분이 실행되지 않아 실제 DOM에 반영되기 전 참조하려 하기 때문이다.
- 실제로 컴포넌트 함수의 return 부분이 호출되어 DOM에 반영되면 해당 값이 변경된다.

<img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/2dbadf57-223f-42e4-8011-b73098d197e6" width="30%"/>

- 이런 RefObject의 current는 readonly로 설정되므로, 직접 .current의 값을 수정하려 하면 에러가 발생한다.
- 하지만 아래와 같은 수정은 가능하다.

```
 MyInput.current.value = "";
```

> 🤔 왜 가능할까?

- 정의상 .current인 프로퍼티만 읽기 전용이기 때문이다!
- 따라서 .current의 하위 프로퍼티인 value는 여전히 수정이 가능하다.

#### 🔎 References

[TypeScript React에서 useRef의 3가지 정의와 각각의 적절한 사용법](https://driip.me/7126d5d5-1937-44a8-98ed-f9065a7c35b5) <br/>
[TypeScript/React: what does the RefObject<HTMLElement> datatype refer to?](https://stackoverflow.com/questions/71174649/typescript-react-what-does-the-refobjecthtmlelement-datatype-refer-to) <br/>
[How to use refs in React with Typescript](https://stackoverflow.com/questions/33796267/how-to-use-refs-in-react-with-typescript)
