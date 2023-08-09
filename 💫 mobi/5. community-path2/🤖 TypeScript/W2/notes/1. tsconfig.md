<p align="center"><img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/3f4ccff3-8072-4d29-8369-7ad1da35e7dc" width="70%"/></p>

## 1. tsconfig의 역할은 무엇인가?

### 🤔 tsconfig.json이란?

- 프로젝트를 컴파일하는데 필요한 루트 파일과 컴파일러 옵션을 지정해주는 파일
- 디렉토리에 tsconfig.json 파일이 있으면 해당 디렉토리가 TS 프로젝트의 루트가 된다.
- jsconfig.json과 거의 동일하게 동작하나 jsconfig.json에는 JS 관련 컴파일러 플래그가 기본으로 활성화되어 있다.

> 디렉토리

- 컴퓨팅에서 파일을 분류하기 위해 사용하는 이름 공간
- 파일 시스템의 관점에서 파일들을 묶어두는 것
- 폴더와 유사한 개념이나 폴더는 파일 시스템에는 존재하지 않는 특수 항목들까지 아우를 수 있다.

### 🤖 TS 컴파일러의 컴파일 과정

> tsconfig.json 사용하기

- 입력 파일 없이 tsc 호출 시 컴파일러는 현재 디렉토리에서부터 시작하여 상위 디렉토리 체인으로 tsconfig.json 파일을 검색한다.
- project (또는 -p) 커맨드 라인 옵션
  - 입력 파일 없이 tsc와 tsconfig.json 파일이 포함된 디렉토리 경로 또는 설정이 포함된 유효한 경로의 .json 파일 경로를 지정한다.
- 커맨드 라인에 입력 파일을 지정 시 tsconfig.json 파일이 무시된다.

## 2. tsconfig는 어디까지의 역할을 할 수 있을까?

## 3. tsconfig의 주요 옵션

## 4. tsconfig 활용하기

ex) ../../../style/style.js => @style/style.js

#### 📑 References

- [공식문서\_Docs on every TSConfig option](https://www.typescriptlang.org/tsconfig)
- [Typescript 컴파일시 세부설정 (tsconfig.json)](https://codingapple.com/unit/typescript-tsconfig-json/)
- [tsconfing.json](https://typescript-kr.github.io/pages/tsconfig.json.html)
- [(번역) 타입스크립트 컴파일러가 컴파일하는 방법](https://velog.io/@sehyunny/how-ts-compiler-compiles)
- [[TypeScript] 컴파일 옵션 살펴 보기 (TSConfig Reference)](https://it-eldorado.tistory.com/128)
- [[TypeScript] 타입스크립트 컴파일러](https://velog.io/@hailieejkim/TypeScript-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%BB%B4%ED%8C%8C%EC%9D%BC%EB%9F%AC)
