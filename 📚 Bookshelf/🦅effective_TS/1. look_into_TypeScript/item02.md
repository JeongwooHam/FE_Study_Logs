## ✨ 타입스크립트 설정 이해하기

### 커맨드 라인에서 설정 사용하기

```shell
$ tsc --noImplicitAny program.ts
```

### `tsconfig.json` 설정 파일 사용하기

```json
{
  "compilerOptions": {
    "noImplicitAny": true
  }
}
```

- 팀원 및 다른 도구들도 파악이 용이하다.
- `tsc --init`을 실행하면 생성할 수 있다.

### 세부 설정 이해하기

> `noImplicitAny`

- 변수들이 미리 정의된 타입을 가져야 하는지 여부를 제어한다.
- **암시적** `any` 경우 오류로 간주된다.

```js
// 명시적으로 any를 선언해주거나 더 분명한 타입을 사용해야 한다.
function add(a, b) {
  return a + b;
}
```

> `strictNullChecks`

- `null`과 `undefined`가 모든 타입에서 허용되는지 확인하는 설정
- `undefined는 객체가 아닙니다`와 같은 런타임 오류를 방지할 수 있다.

```ts
// 설정 해제 시 유효한 코드
// 설정 시 오류!!
const x: number = null; // null 형식은 number 형식에 할당할 수 없습니다.
```

- 의도를 명시적으로 드러내면 `null`과 `undefined`를 사용할 수 있다.

```ts
const x: number | null = null;
```

- `null`을 허용하지 않으려면 `null` 체크 코드나 **단언문**을 추가해야 한다.

<hr/>

- 👩‍🏫 **타입스크립트에서 엄격한 체크를 하고 싶다면 `strict` 설정을 하면 됩니다!**
