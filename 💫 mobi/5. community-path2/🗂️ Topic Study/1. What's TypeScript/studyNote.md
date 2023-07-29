![image](https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/e87b7658-ce2f-4e7f-9e67-bfadf83350ea)

## 🤖 TypeScript의 특징

TS는 JS의 Superset으로, TS로 작성된 코드가 브라우저에서 실행되려면 중간 변환 과정이 필요함 <br/> 즉, TS로 작성된 코드가 컴파일 되면 JS 코드로 변환됨 <br/> 또한 TS는 명시적 타입 정의가 없는 경우 TS 내부에서 값을 기준으로 해당 변수의 타입을 추론으로 유추하기도 함

|                |   JS    |   TS    |
| :------------: | :-----: | :-----: |
|  타입 시스템   |  동적   |  정적   |
| 오류 검출 시점 | Runtime | Compile |
| 타입 자동 변환 |    X    |    O    |

## 🤔 그렇다면 이러한 일련의 과정들은 어떠한 원리에 기반하여 동작하고 있는 것일까?

### 🪸 AST(추상 구문 트리) 만들기

![image](https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/8adcf406-c003-43dd-9a8d-968da5450979)

> Scanner

- TS로 입력된 코드 문자열을 예약어, 콜론, 부호 등의 토큰으로 분리시킴 (Toeknize)

> Parser

- Scanner가 분리해준 토큰을 구문의 구조에 따라 트리 구조로 만듦
- 코드가 올바른 문법인지 분석하여 구문 오류를 잡아냄

> AST

- 소스 코드에서 발생되는 구조를 트리 형식으로 나타낸 것
- 컴파일 과정에서 각 구문을 토큰으로 추출하고 AST로 변환하기까지의 역할을 수행함
- AST가 생성되면, 이를 기준으로 분석, 타입 검사 실시

### 🧐 타입 검사하기

![image](https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/45a78798-a51c-48d5-af8f-0e4586a3f46a)

> Binder

- 전체 AST를 읽어서 타입 검사에 필요한 데이터를 수집하는 과정
- Symbol이라는 메타 데이터 생성
  - 각 영역별로 Identifier 구분
  - 식별자가 어느 위치에 정의되었는지, 어떤 플래그를 적용할 것인지 선택
  - Symbol: Primary Building Block of the TS Semantic System
  - 설정된 Symbol은 Symbol Table에 HashMap으로 저장됨 → 이후 코드 분석 단계에서 기준이 됨
- Flow Nodes로 변수 추적
  - 코드의 분기점이 되는 흐름 조건부(Flow Conditional)를 기준으로 영역(Flow Container) 지정
  - 검사할 노드로부터 부모 노드를 향해 역방향으로 변수와 타입 추적

> Type Checker

- 생성된 AST와 Symbol Table을 기준으로 타입 검사 시행
- 구조적 타이핑
  - 검사는 구조적으로 이루어지며, 외부에서 내부로 진행됨
  - 값이 object 형태인지 비교 → 필드 검사 → 값의 타입이 일치하는지 비교
  - TypeFlags 사용
    - /src/compiler/types.ts에 정의되어 있음
    - 가능한 모든 타입을 포함함
- 타입을 지정하지 않을 경우, AST initializer 결과 값의 타입을 type syntax로 대입함
  - 예: <code>const message = ":)"</code>
  - 결과값 ":)"의 타입인 string을 message의 type syntax에 대입

### 🤖 변환하기 (Transformer)

> tsConfig.json

- TS 코드를 JS 코드로 변환하기 위해서는 Compile Option이 필요함
- 해당 옵션을 관리하는 파일이 <code>tsConfig.json</code>

> emmiter

- AST를 파일로 변환하는 역할을 함
- AST와 Checker를 통해 JS 코드를 만듦
- 변환 과정
  1. TS AST를 JS AST로 변환 <br/>
     : TS AST에서 타입을 나타내는 키워드 Syntax 제거
  2. 각 문법 버전에 따라 Asset Flag 지정
  3. Asset, JS 코드, TS 코드로 구분하여 처리
- 두 가지 파일 생성
  - <code>emmiter.ts</code>
    : JS 코드
  - <code>declarationEmmiter.ts</code>
    : .d.ts 코드 - 타입만 정의해놓은 파일 - 컴파일러가 만들어내기도 하고, 사용자가 정의할 수도 있음 - 이 파일로 변수 유형을 지정해두면, 컴파일러는 이 파일을 타입 추론에 참고함

#### 📑 REFERENCES

[TypeScript Compile Process](https://www.nextree.io/typescript-compile-process/)
<br/>
[TypeScript / How the compiler compiles](https://www.huy.rocks/everyday/04-01-2022-typescript-how-the-compiler-compiles)
<br/>
[Understanding TypeScript’s “Compilation Process” & the anatomy of “tsconfig.json” file to configure TypeScript Compiler](https://medium.com/jspoint/typescript-compilation-the-typescript-compiler-4cb15f7244bc)

## 💡 우리가 TypeScript를 사용해야 하는 이유

### 🌟 높은 수준의 코드 탐색과 디버깅 가능

    - TS는 코드에 목적을 명시하고, 이에 맞지 않는 타입의 변수나 함수에 대해서는 에러를 발생시켜 버그 사전 차단
    - 코드 자동완성, 실행 전 피드백을 제공함으로써 작업과 동시에 디버깅이 가능해지므로 생산성 증대, DX 개선!

### 🌟 JS와의 호환성

    - JS와 완전히 호환되므로, JS를 사용할 수 있는 환경에서는 모두 TS도 사용 가능
    - TS는 JS 컴파일 시 타입 안정성을 제공하며, 선택적 적용이 가능함
    - .js 파일 확장자를 .ts로 바꾸고 사용하면 TS 사용 가능
    - 이는 TS가 JS의 Superset이기에 가능한 것

### 🌟 명시적인 타입 사용 가능

    - 향후 개발 편의성을 위해 코드를 문서화할 목적으로 타입을 직접 지정할 수 있음
    - 의도한 코드의 방향성과 컴파일러가 수행할 알고리즘적 분석을 강제로 일치시키기 위해서도 지정 가능

### 🌟 암시적인 타입 적용 가능

    - TS는 코드 개발 중 최소한의 비용으로 타입 안정성 제공
    - 타입을 지정하지 않아도, Type System이 타입 추론

### 🌟 점진적인 전환 가능

    - JS로 구현된 프로젝트의 추가 기능, 특정 기능에만 TS를 도입 후 점진적으로 TS로 전환하는 것이 가능함
    - 컴파일 오류가 있더라도 TS는 JS 코드를 최대한 반환하므로, 코드 마이그레이션에 용이

### 🌟 강력한 생태계

    - 대부분의 라이브러리 및 VS Code 등 각종 에디터가 TS 및 관련 플러그인 지원

#### 📑 REFERENCES

[왜 타입스크립트인가](https://radlohead.gitbook.io/typescript-deep-dive/getting-started/why-typescript)
<br/>
[활용도가 높아지는 웹 프론트엔드 언어, 타입스크립트(TypeScript)](https://www.samsungsds.com/kr/insights/typescript.html)
