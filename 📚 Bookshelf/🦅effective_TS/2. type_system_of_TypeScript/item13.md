## ✨ 타입과 인터페이스의 차이점 알기

### 공통점

- 정의되지 않은 추가 속성에 대해 오류가 발생한다.
- 인덱스 시그니처를 사용할 수 있다.
  - `[key: string]: string`

> 함수 타입 정의하기

- 단순한 함수 타입에서는 Type Alias가 더 편리하다.

```ts
type Tfunc = (x: string) => number;
interface Ifunc {
  (x: string): number;
}
```

> 제네릭

```ts
type TGeneric<T> = {
  element: T;
};

interface IGeneric<T> {
  element: T;
}
```

> 확장 가능성

- 인터페이스로 타입을 확장할 수 있다.
- Type Alias로 인터페이스를 확장할 수 있다. (`&`) ➡️ 복잡한 타입을 확장할 수 있다.

> 클래스 구현하기

```ts
class TClass implements TState {
  element: string = "";
}

class IClass implements IState {
  element: string = "";
}
```

### Type Alias의 차이점

- 유니온 타입이 존재한다.

> 유니온 타입 확장하기

```ts
// 1. 매핑 인터페이스 만들기
interface IMap {
  [name: string]: Type1 | Type2;
}

// 2. &로 확장하기
type TMap = (Type1 | Type2) & { name: string };
```

- 튜플과 배열 타입을 간결하게 표현할 수 있다.
  - 인터페이스로 따라할 경우 사용할 수 없는 메서드들이 생긴다.

```
👩‍🏫 간결하고 일관된 타입 또는 복잡한 타입에서 사용합시다!
```

### Interface의 차이점

- **보강**이 가능하다.
  - `선언 병합`: 속성을 확장하는 것 (⚠️ 프로젝트 내부에서 발생하지 않도록 주의하자)
  - 사용자가 빈틈을 채울 수 있도록 타입 선언 파일에서는 인터페이스를 사용해야 한다.

```
👩‍🏫 API 타입 선언처럼 보강이 필요할 수 있는 경우 사용합니다!
```
