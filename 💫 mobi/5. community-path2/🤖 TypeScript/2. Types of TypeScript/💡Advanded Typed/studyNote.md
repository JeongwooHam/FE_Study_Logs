![image](https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/dada102b-a4c1-4286-8c45-7d3c87981c56)

(https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%ED%83%80%EC%9E%85-%EC%84%A0%EC%96%B8-%EC%A2%85%EB%A5%98-%F0%9F%92%AF-%EC%B4%9D%EC%A0%95%EB%A6%AC)

### 🌟 union

    - 여러 타입 중 하나가 될 수 있는 값
    - 세로 막대 (|)로 각 타입을 구분함
    - 단일 타입일 때는 그냥 사용해도 되지만, 배열일 경우 괄호 필요
      예: string | number  /  (string | number)[]
    🚨 타입 가드를 통해 타입의 범위를 좁히지 않는 한, 각 타입 속성들의 교집합만 사용 가능

> 🤼 intersection

- 여러 타입을 하나로 결합함 (&)
- 기존 타입을 합쳐 필요한 모든 기능을 가진 하나의 타입 도출 가능
- 각 타입 속성들의 합집합 사용 가능

### 🌟 type alias

### 🌟 interface

### 🌟 generic

(https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Generic-%ED%83%80%EC%9E%85-%EC%A0%95%EB%B3%B5%ED%95%98%EA%B8%B0)

### 🌟 as const

### 🌟 optional

### 🌟 satisfies

### 🌟 conditional

(https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%A1%B0%EA%B1%B4%EB%B6%80-%ED%83%80%EC%9E%85-%EC%99%84%EB%B2%BD-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)

    - 타입 관계 검사를 통해 두 가지 가능한 타입 중 타입 관계 검사로 표현된 조건에 따라 하나 선택
    - 입력된 제네릭 타입에 따라 타입을 결정하는 기능
    - 조건에 따라 값을 결정하는 JS의 삼항 연산자처럼, 타입을 조건에 따라 결정하는 것!
    - 별개의 타입 문법으로 취급됨

> <code>T extends U ? X : Y</code>

    - T, U, X, Y는 모두 타입!
    - T 타입이 U에 할당 가능한 타입이면 X, 아니면 Y라는 타입임을 의미

<br/>

## 🛠️ Utility Types

- 공통 타입 변환을 용이하게 하기 위해 TS에서 제공하는 타입들
- JS에서 for문, while문을 발전시켜 map, find, filter와 같은 고차함수를 사용하는 것과 유사한 개념
- 기본 문법으로도 충분히 타입 변환이 가능하지만 더 간결한 문법으로 타입 정의가 가능해짐
- 전역으로 사용 가능함

(https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9C%A0%ED%8B%B8%EB%A6%AC%ED%8B%B0-%ED%83%80%EC%9E%85-%F0%9F%92%AF-%EC%B4%9D%EC%A0%95%EB%A6%AC)

### 🌟 Partial<Type>

### 🌟 Omit<Type, Keys>

### 🌟 Pick<Type, Keys>

### 🌟 ReturnType<Type>

<hr/>

#### 📑 References

[1. TypeScript-Handbook 한글 문서](https://typescript-kr.github.io/) <br/>
[2. Advanced TypeScript Type ...](https://www.freecodecamp.org/news/advanced-typescript-types-cheat-sheet-with-examples/) <br/>
[3. TS 공식문서 - Utility Types](https://www.typescriptlang.org/ko/docs/handbook/utility-types.html) <br/>
[4. 타입스크립트 정리 블로그](https://inpa.tistory.com/category/Language/TypeScript) <br/>
[5. TypeScript 4.9 - The Satisfies Operator](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html)
