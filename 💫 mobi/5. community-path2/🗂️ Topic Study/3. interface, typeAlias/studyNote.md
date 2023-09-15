![image](https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/7d4b149d-30dd-424a-b269-2235ebdaafd2)

## 🌟 type alias (타입 별칭)

```
A type alias is exactly that - a name for any type.
모든(any) 타입에 이름을 달아줄 수 있다.
```

    - 특정 타입이나 인터페이스를 참조할 수 있는 타입 변수
    - 사용자가 정의하는 타입 변수
    - string, number와 같은 기본 타입 뿐만 아니라 interface 레벨의 복잡한 타입에도 별칭 부여 가능
    - 타입 별칭에 제네릭도 사용 가능
    - Java에서 앞에 자료형을 선언하고 뒤에 자료형에 부합하는 값을 대입하는 것처럼
      type이라는 자료형 선언 후 뒤에 타입값을 넣어주면 됨
      예: type Name = string / let name: Name = "Jane"

<img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/38845e79-411c-4c23-b0ca-807be380f7f2" width="50%">

- 해당 타입을 가지는 변수 선언 시 자동완성 지원

<img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/c421454b-0e6f-4c87-8cc0-399979478cfa" width="50%">

- type에 선언해두고 사용하지 않은 속성이 있으면 에러 발생

## 🌟 interface

```
An interface declaration is another way to name an object type
객체 타입에 이름을 붙여줄 수 있다.
```

: 상호 간에 정의한 약속 혹은 규칙. 타입을 정의한 것들을 한데 모은 객체 타입

### 🤔 보통 무엇을 정의할까?

    1. 객체의 스펙 (속성, 속성의 타입)

    2. 함수의 파라미터

    3. 함수의 스펙 (파라미터, 반환 타입 등)

    4. 배열과 객체에 접근하는 방식

    5. 클래스

<img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/55ab8acf-5710-43b8-8170-686ed51f82a6" width="50%"/>
<img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/e7e80811-fb4b-41fc-a6cd-6da222c2e2d3" width="50%"/>

- 함수의 파라미터로 받아온 속성 자동완성 가능

```
🧐 하지만 type alias가 interface을 사용한 type 선언을 모두 대체할 수 있는 것 아닌가요?
```

## 👩‍🏫 interface, 왜 사용할까?

```
Type aliases and interfaces are very similar, and in many cases you can choose between them freely.
Almost all features of an interface are available in type,
the key distinction is that a type cannot be re-opened to add new properties
vs an interface which is always extendable.

from TS Official Document
```

### 💡 타입의 확장이 가능하다.

> type alias

```ts
type Animal = {
  name: string;
};

// intersection을 사용해야 타입 확장이 가능하다.
type Cat = Animal & {
  isFly: boolean;
};

const myCat = newCat();
myCat.name;
myCat.isFly;
```

> interface

```ts
interface Animal {
  name: string;
}

// interface로 바로 확장 가능하다.
interface Cat extends Animal {
  isFly: boolean;
}

const myCat = newCat();
myCat.name;
myCat.isFly;
```

### 💡 선언 병합; 존재하는 type에 프로퍼티를 추가할 수 있다.

> type alias

```ts
type User = {
  id: string;
};

type User = {
  pw: number;
};

// ERROR: Duplicate identifier 'User'.
```

- 이미 선언된 타입과 동일한 이름의 타입 선언 시 에러가 발생한다.
- 추후 속성들이 추가되지 않음이 확실한 상황에서 사용하면 좋다. (const)

> interface

- interface는 동일한 이름으로 여러 번 선언해도 컴파일 시점에 하나의 타입으로 합칠 수 있다.

```ts
interface User {
  id: string;
}

interface User {
  pw: number;
}

const Jane = newUser();
Jane.id;
Jane.pw;
```

- type alias와 다르게 선언된 타입의 이름과 동일한 이름의 새로운 타입을 선언해도 에러가 발생하지 않는다.
  - 대신 이후 선언된 타입의 프로퍼티가 선언 병합된다.
- 라이브러리를 사용할 때 추가적으로 타입의 속성을 선언하기 용이하다.

### 🤔 왜 선언 병합이 가능한 interface를 만들었을까?

- TS 팀은 **개방-폐쇄 원칙**에 따라 열려 있는 JS 객체 동작 방식과 비슷하게 동작하는 interface를 설계했다.

```
💡 개방-폐쇄 원칙 (OCP, Open-Closed Priciple)
- 소프트웨어 개체(클래스, 모듈, 함수 등)은 확장에 대해 열려 있어야 하고, 수정에 대해서는 닫혀 있어야 한다.

1) 확장에 대해 열려 있다.
    - 모듈의 동작을 확장(변경)할 수 있다.
    - 애플리케이션의 요구사항이 변경되면, 이에 따라 새로운 동작을 추가해 모듈을 확장할 수 있다.
2) 수정에 대해 닫혀 있다.
    - 모듈의 소스코드, 바이너리 코드 수정 없이도 모듈의 기능에 대한 확장 및 변경이 가능하다.

👩‍🏫 이를 통해 우리는 객체 지향 프로그래밍의 가장 큰 장점인 유연성, 재사용성, 유지보수성을 얻을 수 있습니다!
```

- TS 팀은 가능한 type alias 보단 interface를 사용하되, union 타입 혹은 tuple 타입을 반드시 써야하는 상황에서는 type alias를 사용할 것을 권장한다.
- 선언 병합을 위해, 외부에 공개할 API는 interface를 사용하는 것이 좋다.

```ts
// @emotion/react/types
// 라이브러리에서 선언된 interface
export interface Theme {}

// emotion.d.ts
import "@emotion/react";

declare module "@emotion/react" {
  // 라이브러리에서 선언된 타입의 확장 가능
  export interface Theme {
    colors: typeof Colors;
  }
}
```

### 🔎 References

- [interface vs type alias](https://tecoble.techcourse.co.kr/post/2022-11-07-typeAlias-interface/)
- [Type vs Interface, 언제 어떻게?](https://medium.com/humanscape-tech/type-vs-interface-%EC%96%B8%EC%A0%9C-%EC%96%B4%EB%96%BB%EA%B2%8C-f36499b0de50)
- [TypeScript-Handbook 한글 문서](https://typescript-kr.github.io/)
- [Advanced TypeScript Types Cheat Sheet (with Examples)](https://www.freecodecamp.org/news/advanced-typescript-types-cheat-sheet-with-examples/)
- [Differences Between Type Aliases and Interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)
