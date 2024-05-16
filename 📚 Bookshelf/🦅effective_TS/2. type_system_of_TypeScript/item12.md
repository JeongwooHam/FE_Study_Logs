## ✨ 함수 표현식에 타입 적용하기

### 함수 문장

```js
function addNum(num1: number, num2: number): number {
  return num1 + num2;
}
```

### 함수 표현식

```js
const addNum = function (num1: number, num2: number): number {
  return num1 + num2;
};
```

- **_TS에서는 함수 표현식 사용이 권장된다._**
  - 매개변수, 반환값 전체를 함수 타입으로 선언해 표현식으로 재사용할 수 있다.

### 함수 타입 선언의 장점

- 불필요한 코드의 반복을 줄인다. (반복되는 함수 시그니처 통합)
- 라이브러리에서 공통 함수 시그니처를 타입으로 제공할 수 있다. (`MouseEventHandler`)
- `typeof fn`을 사용해 다른 함수의 시그니처를 참조할 수 있다.

  > 코드 예시

- `fetch` 실패 시 거절된 `Promise`를 반환하지 않는 문제점 해결
- 오류를 더 쉽고 명시적으로 감지할 수 있다.

```ts
const checkedFetch: typeof fetch = async (input, init) => {
  const res = await fetch(input, init);
  if (!res.ok) {
    // 거절된 Promise를 반환할 수 있게 된다.
    throw new Error("failed request" + request.status);
  }
  return response;
};
```
