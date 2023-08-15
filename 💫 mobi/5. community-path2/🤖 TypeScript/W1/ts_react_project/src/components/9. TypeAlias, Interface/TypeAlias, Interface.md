# 🌟 Type Alias VS. Interface

|                      조건                      | Type Alias |     Interface     |
| :--------------------------------------------: | :--------: | :---------------: |
|             함수 사용이 가능한가?              |     ⭕     |        ⭕         |
|            생성자 사용이 가능한가?             |     ⭕     |        ⭕         |
|             튜플 사용이 가능한가?              |     ⭕     | ❌ <br/>직접 구현 |
|    정의된 후 동일한 이름으로 확장 가능한가?    |     ❌     |        ⭕         |
|       객체가 아닌 값을 사용할 수 있는가?       |     ⭕     |        ❌         |
|       Computed Value를 사용할 수 있는가?       |     ⭕     |        ❌         |
|        mapped type을 사용할 수 있는가?         |     ⭕     |        ❌         |
| union, intersection 키워드를 사용할 수 있는가? |     ⭕     |        ❌         |
|      미리보기를 자세히 보여줄 수 있는가?       |     ⭕     |        ❌         |

    ⚠️: 특정 케이스에서만 가능함

### 🤖 Type Alias와 Interface의 확장 방식

> 👾 Type Alias

```tsx
type Book = {
  title: string;
};

type MyBook = Book & {
  author: string;
};

const Frankenstein: MyBook = {
  title: "Frankenstein",
  author: "Mary Shelley",
};
```

- `&` 을 사용해 **intersection** 의 형태로 타입 간 연결 및 확장

<br/>

> 👾 Interface

```tsx
interface Book {
  title: string;
}

interface MyBook extends Book {
  author: string;
}

const Frankenstein: MyBook = {
  title: "Frankenstein",
  author: "Mary Shelley",
};
```

- 클래스처럼 `extends` 를 사용해 타입 간 연결 및 확장

### 🤖 같은 이름으로 확장 선언할 경우

> 👾 Type Alias

<img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/c8dd8b8d-f9d4-4b36-b270-b76a19ed6c4a" width="60%"/>

<img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/abfaa513-5227-48e6-b7ba-8b49c96376cd" width="60%"/>

- 동일한 이름으로 확장을 시도할 경우 위와 같은 에러가 발생한다.

> 👾 Interface

- **_선언 병합_** (Declaration Merging)
  - 동일한 이름으로 여러 번 선언해도 컴파일 시점에서 하나로 합쳐진다.
  - 이 덕분에, 동일한 이름으로 확장일 시도해도 에러 없이 잘 작동한다.

### 🤖 Computed Value를 사용할 경우

    * Computed Value: 프로퍼티 이름이 동적으로 계산되는 경우

> 👾 Type Alias

<img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/7f97c16f-6be7-4b79-8f93-bd9a6d6fbea5" width="30%">

- Type Alias는 단순히 타입에 대한 별칭을 지정하는 기능으로, 타입을 확장하거나 조합하는 것이 아니다.
- 따라서 유연하게 동적 프로퍼티 추론이 가능하다!

> 👾 Interface

<img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/af16c3b3-3dd3-4bc5-8e08-8d0a6ae04dd1" width="30%">

- 에러가 발생하지는 않지만, 자동완성을 지원하지 않고 any 타입으로 추론된다.
- 이는 interface가 타입 간의 상속과 구현을 지원하는, 타입 정의의 더 강력하고 구조적인 방법이기 때문이다.
- TS 시스템이 정적으로(엄격하게) 타입을 검사하므로 명시적으로 정의된 프로퍼티만 허용하고, 동적인 프로퍼티는 지원하지 않는다.

### 🤖 미리보기 확인하기

> Type Alias

<img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/755b66a8-2c52-4b0f-b541-135bd16983a9" width="30%"/>

- 해당 타입의 전체 속성 정보를 조회할 수 있다.

> 👾 Interface

<img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/168681cc-4125-4d03-aed7-10f282f0a112" width="30%"/>

- 인터페이스명만 조회된다.

### 🤔 그렇다면 뭘 쓰는게 좋을까?

    간단하게 사용하기에는 Type Alias도 나쁘지 않아보인다.
    실제로 Interface에서 사용하려면 Type Alias보다 번거워지는 기능들도 있다.
    하지만 확장을 해줄 때 새로운 선언이 필요 없고,
    정적 타입 검사를 진행한다는 점에서 TS를 쓰는 목적에 더 부합한 것 같아 주로 interface를 사용하게 될 것 같다.
    (실제로 TypeScript 공식 문서에서도 Interface의 사용을 권장하고 있다고 한다!)

#### 🔎 References

[React+TypeScript Cheatsheets - types or interfaces](https://github.com/typescript-cheatsheets/react#types-or-interfaces) <br/>
[TS Documentation - Differences Between Type Aliases and Interfaces](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces) <br/>
[[Typescript] Type Alias vs Interface](https://abangpa1ace.tistory.com/entry/Typescript-Type-Alias-vs-Interface#google_vignette)
