## ✨ 타입이 값들의 집합이라고 생각하기

- 런타임에 모든 변수는 각자의 고유한 값을 가진다.
- 코드 실행 전 TS가 오류를 체크할 때에는 **타입**을 가진다.
  - **타입**: 할당 가능한 값들의 집합
- `never`
  - 공집합
  - 아무 값도 할당할 수 없다.
- 리터럴 타입
  - 유닛 타입
  - 한 가지 값만 포함한다.
- 유니온 타입
  - 두 개 혹은 세 개 이상의 타입을 묶는다.
- 할당 가능한
  - ~의 원소(값과 타입 간), ~의 부분 집합(두 타입 간)
  - 타입 체커: 하나의 집합이 다른 집합의 부분 집합인지 검사하는 것

> `&`

- 두 타입의 교집합
- `keyof (A&B) = (keyof A) | (keyof B)`
- 인터페이스의 속성이 아닌 값의 집합(타입의 범위)

```ts
interface Person {
  name: string;
}

interface User {
  age: number;
}

type UserType = Person & User;

const user: UserType = {
  name: "Jane",
  age: 100,
}; // ok
```

> `|`

- 두 타입의 합집합
- `keyof (A|B) = (keyof A) & (keyof B)`

```ts
type UNION = keyof (Person | User); // never
```

> `extends`

- ~의 부분 집합
- 서브타입 (벤 다이어그램으로 도식화)
- 제네릭 타입의 한정자로도 사용된다.

### 타입은 집합니다.

- 타입 간 인터섹션이 공집합이나 부분집합이 아닐 때 **집합**으로 표현하는 것이 좋다.
- 배열과 튜플의 관계를 명확하게 할 수 있다.
  - 타입스크립트는 `[number, number]`를 `{0: number, 1: number, length:2}`로 모델링한다.
- 동일한 값의 집합을 가지는 두 타입은 **같다**.
