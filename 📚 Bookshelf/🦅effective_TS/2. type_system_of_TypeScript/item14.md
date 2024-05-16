## ✨ 타입 연산과 제너릭 사용으로 반복 줄이기

### DRY(Don't Repeat Yourself) Principle

- 타입에 이름을 붙여 반복을 줄일 수 있다.
- 명명된 타입을 사용해 함수 시그니처를 분리할 수 있다.
- 인터페이스의 확장을 사용해 반복을 줄일 수 있다.
- 인터섹션(`&`) 연산자를 사용해 타입을 확장해 반복을 줄일 수 있다.
  - `type PersonWithAge = Person & { age: number }`
  - 확장할 수 없는 유니온 타입에 속성을 추가할 수 있다.
- 상위 타입의 부분 집합으로 하위 타입을 정의해 중복을 제거할 수 잇다.

  ```ts
  interface Parent {
    first: string;
    second: boolean;
    third: number;
  }

  // 1. Parent 인덱싱
  type Child = {
    first: Parent["first"];
    second: Parent["second"];
    third: Parent["third"];
  };

  // 2. 매핑된 타입
  type ChildKey = "first" | "second" | "third";
  type Child = {
    [k in ChildKey]: Parent[k];
  };
  ```

### 제너릭 타입

> **_Pick_**

- 인덱싱을 했을 때와 다른 타입을 반환한다.

```ts
interface First {
  name: "FIRST";
}

interface Second {
  name: "SECOND";
}

type Name = First | Second;

// 1. 인덱싱
type NameType = Name["name"]; // 'FIRST' | 'SECOND'

// 2. Pick
type NmaePick = Pick<Name, "name">; // {type: 'FIRST' | 'SECOND'}
```

> `keyof`

- 타입을 받아 속성 타입의 유니온을 반환한다.
- 객체로부터 속성 전체가 선택적으로 변환된 타입을 생성할 수 있다.

```ts
interface Box {
  width: number;
  height: number;
}

type UpdateBox = { [k in keyof Box]?: Box[k] };
```

> `typeof`

- 동명의 자바스크립트 런타임 연산자보다 정확하게 타입을 표현한다.
- 값의 형태에 해당하는 타입을 정의할 수 있다.

> `ReturnType`

- 함수나 메서드의 반환 값에 명명된 타입을 생성할 수 있다.
- `type PostLIst = ReturnType<typeof getPostList>`

> `extends`

- 제너릭 타입에서 매개변수를 제한할 수 있게 한다.

```ts
interface Cat {
  name: string;
  age: number;
  isCute: boolean;
}

type CatType<T extends Cat> = [T, T];
```

- `Pick`을 정의할 수 있다.

```ts
// 🚨 ERROR: 'K'가 'T'와 무관하고 범위가 넓어 에러가 발생한다.
type Pick<T, K> = { [k in K]: T[k] };

// 💡 OK: 'K'는 'T'의 키의 부분집합이 된다.
type Pick<T, K extends keyof T> = {
  [k in K]: T[k];
};
```
