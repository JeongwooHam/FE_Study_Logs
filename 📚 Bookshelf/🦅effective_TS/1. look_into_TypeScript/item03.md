## ✨ 코드 생성과 타입이 관계 없음을 이해하기

### 코드 생성은 타입 시스템과 무관하다.

- 타입스크립트 타입은 런타임 동작이나 성능에 영향을 주지 않는다.
- 최신 TS/JS를 구버전의 JS로 트랜스파일하는 것과 코드의 타입 오류를 체크하는 것은 완벽히 독립적이다.

### 타입 오류가 존재해도 코드 생성(컴파일)은 가능하다.

- 타입 체크와 컴파일이 동시에 이루어지는 C나 Java와는 달리 컴파일과 타입 체크가 독립적으로 동작한다.
- **경고** 정도의 의미여서 빌드를 멈추지는 않는다.
- 오류가 있을 때 컴파일하지 않으려면?
  - `tsconfig.json`에 `noEmitOnError` 설정
  - 빌드 도구에 설정

> **컴파일과 타입 체크**

- 코드 생성만이 **컴파일**
- 작성한 TS가 유효한 JS라면 TS 컴파일러는 컴파일을 수행하므로 코드에 오류가 있을 경우 컴파일이 아닌 **타입 체크**에 문제가 있다고 하는 것이 정확한 표현!

### 타입스크립트 타입은 런타임에 사용할 수 없다.

```ts
interface Book {
  length: number;
  page: number;
}

// 타입이므로 런타임 시점에 아무 역할도 할 수 없다.
interface EffectiveTS extends Book {
  item: number;
}

type CurrentBook = Book | EffectiveTS;

function calcCurrentPercentage(cur: CurrentBook) {
  // 🚨 EffectiveTS는 형식만 참조하지만 여기서는 값으로 사용되고 있습니다.
  if (cur instanceof EffectiveTS) {
    // 🚨 Book 형식에 item 속성이 없습니다.
    return (cur.item / 62) * 100;
  } else {
    return (cur.page / cur.length) * 100;
  }
}
```

- 타입스크립트의 타입은 **제거 가능**하다.
  > 런타임에 타입 정보를 유지하는 방법

1. 속성 체크하기

```ts
if ("item" in cur) {
  /*...*/
}
```

2. **태그된 유니온** 기법

- 런타임에 접근 가능한 타입 정보를 명시적으로 저장한다.

```ts
interface EffectiveTS {
  kind: "effectiveTS";
  length: number;
  page: number;
  item: number;
}

// 위의 예시와 동일

function calcCurrentPercentage(cur: CurrentBook) {
  if(cur.kind === 'effectiveTS'){
    //...
  }else ///
}
```

> 타입과 값을 둘 다 사용하는 기법

- 타입은 런타임에 접근이 불가능하지만 **값은 런타임에 접근이 가능**하다.
- 위의 `Book`과 `EffectiveTS`를 클래스로 만들어 문제를 해결할 수 있다.

```ts
class Book {
  constructor(public page: number) {}
}

class EffectiveTS extends Book {
  constructor(public page: number, public item: number) {
    super(page);
  }
}

// 💡 EffectiveTS는 타입으로 참조된다.
type CurrentBook = Book | EffectiveTS;

function calcCurrentPercentage(cur: CurrentBook) {
  // 💡 EffectiveTS는 값으로 참조된다.
  if (cur instanceof EffectiveTS) {
    cur;
    // 위의 예시와 동일
  }
}
```

### 타입 연산은 런타임에 영향을 주지 않는다.

- 타입 단언문은 타입 연산이므로 런타임 영향에 영향을 미치지 않는다.
- 값을 정제하기 위해서는 런타임의 타입을 체크 ➡️ JS 연산을 통해 변환을 수행해야 한다.

### 런타임 타입은 선언된 타입과 다를 수 있다.

- API를 잘못 파악하거나 배포된 후 API가 변경되는 경우 예상한 타입과 다른 타입이 전달될 수도 있다.

### 타입스크립트 타입으로는 함수를 오버로드할 수 없다.

- **함수 오버로딩**
  - 동일한 이름에 매개변수만 다른 여러 버전의 함수를 허용하는 것
- 타입스크립트에서는 타입과 런타임의 동작이 무관해서 함수 오버로딩이 **불가능**하다.
- 여러 개의 선언문을 작성 가능하지만 **구현체는 하나뿐**이다.

### 타입스크립트 타입은 런타임 성능에 영향을 주지 않는다.

- 런타임 오버헤드 대신 타입스크립트 컴파일러는 **빌드타임** 오버헤드가 있다.
  - 오버헤드가 커지면 빌드 도구에서 `transpile-only`를 설정해 타입 체크를 건너뛸 수 있다.
