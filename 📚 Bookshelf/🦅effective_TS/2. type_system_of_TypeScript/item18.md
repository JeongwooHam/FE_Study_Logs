## ✨ 매핑된 타입을 사용하여 값을 동기화하기

### 보수적(실패에 닫힌) 접근법

새로운 속성이 추가되면 값이 변경될 때마다 `event`를 다시 실행해야 한다.

```ts
const needUpdate = (oldProps: Props, newProps: Props) => {
  let key: keyof Props;
  for (key in oldProps) {
    if (oldProps[key] !== newProps[key]) {
      if (key !== "event") return true;
    }
  }
  return false;
};
```

### 실패에 열린 접근법

두 객체가 정확히 똑같은 속성을 가지게 할 수 있다.

```ts
// UPDATE_LIST와 Props가 동일한 속성을 가져야 한다.
const UPDATE_LIST: {[key in keyof Props]: boolean} = {
    a: true;
    b: true;
    event: false
}

const needUpdate = (oldProps: Props, newProps: Props) => {
    // ...
    for (key in oldProps) {
    if (oldProps[key] !== newProps[key] && UPDATE_LIST[key]) {
      return true;
    }
  }
  return false
}
```
