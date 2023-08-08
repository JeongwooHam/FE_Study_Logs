![image](https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/dada102b-a4c1-4286-8c45-7d3c87981c56)

## 🌟 [union](<https://github.com/mobi-community/mobi-path-typescript/blob/Jane/1week/2.%20%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%20%ED%83%80%EC%9E%85%20%EC%A0%95%EC%9D%98/%EA%B3%A0%EA%B8%89(%EC%9C%A0%ED%8B%B8)%ED%83%80%EC%9E%85/0.%20example_union%2Cintersection.ts>)

    - 여러 타입 중 하나가 될 수 있는 값
    - 세로 막대 (|)로 각 타입을 구분함
    - 단일 타입일 때는 그냥 사용해도 되지만, 배열일 경우 괄호 필요
      예: string | number  /  (string | number)[]
    🚨 타입 가드를 통해 타입의 범위를 좁히지 않는 한, 각 타입 속성들의 교집합만 사용 가능

### 🌟 intersection

- 여러 타입을 하나로 결합함 (&)
- 기존 타입을 합쳐 필요한 모든 기능을 가진 하나의 타입 도출 가능
- 각 타입 속성들의 합집합 사용 가능

### union 🤼 intersection

    - union은 각 타입에서 일치하는 속성들만 사용 가능함 (∩)
    - intersection은 각 타입의 모든 속성들을 사용 가능함 (∪)

## 🌟 [type alias (타입 별칭)](<https://github.com/mobi-community/mobi-path-typescript/blob/Jane/1week/2.%20%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%20%ED%83%80%EC%9E%85%20%EC%A0%95%EC%9D%98/%EA%B3%A0%EA%B8%89(%EC%9C%A0%ED%8B%B8)%ED%83%80%EC%9E%85/1.%20example_typealias.ts>)

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

## 🌟 [interface](<https://github.com/mobi-community/mobi-path-typescript/blob/Jane/1week/2.%20%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%20%ED%83%80%EC%9E%85%20%EC%A0%95%EC%9D%98/%EA%B3%A0%EA%B8%89(%EC%9C%A0%ED%8B%B8)%ED%83%80%EC%9E%85/2.%20example_interface.ts>)

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

### 🔎 Optional

    속성 이름 뒤에 ? 를 붙여 옵션 속성으로 만들어줌
    설정된 인터페이스에서 정의된 속성 또는 메서드를 반드시 사용하지 않고,
    필요에 따라 선택적으로 속성을 골라 사용하고 싶을 때 쓰는 기능

### type alias 🤼 interface

    - interface는 확장이 가능한데 반해 type alias는 확장 불가능!
    - 간단한 타입 집합으로 사용 시 type alias를 사용하되 interface 사용 권장

+) 소주제 학습에서 interface의 확장성에 대해 더 자세히 공부해볼 것!

## 🌟 [generic](<https://github.com/mobi-community/mobi-path-typescript/blob/Jane/1week/2.%20%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%20%ED%83%80%EC%9E%85%20%EC%A0%95%EC%9D%98/%EA%B3%A0%EA%B8%89(%EC%9C%A0%ED%8B%B8)%ED%83%80%EC%9E%85/3.%20example_generic.ts>)

    - 타입의 변수화
    - 함수의 파라미터처럼 나중에 대입할 수 있도록 타입을 지정하여 재사용성을 높일 수 있게 탄생한 타입
    - 한 가지 타입보다 여러 가지 타입에서 동작하는 컴포넌트 생성 시 사용
    - 선언 문법으로는 주로 <T>를 사용하나, T는 변수명으로 아무 문자나 와도 됨

### 🧐 타입을 함수의 파라미터처럼 사용한다는 것은 무엇을 의미할까?

<code>const returnData(data) => data</code>

의미 있는 함수는 아니지만, <br/>
이처럼 data라는 파라미터에서 값을 받아 data를 반환해주는 함수가 있다고 했을 때, <br/>
data에는 string, number, ... 등 어떤 타입이 들어가도 함수는 에러 없이 값을 반환하게 된다.

```jsx
console.log(returnData(":)")); // ":)"
console.log(returnData([1, 2, 3])); // [1, 2, 3]
```

<br/>

위 함수에 제네릭을 적용해보면?

<br/>

```
function returnData<T>(data: T): T {
    return data
}
```

<br/>

제네릭이 적용된 returnData 함수를 사용한다면?

<br/>

```
returnData<string>(":)");
returnData<number[]>([1,2,3]);
```

<br/>

동작하는 원리는 다음과 같다.

<br/>
(1) 함수 호출 시 함수에서 사용할 타입인 제네릭 값으로 string/number[]을 넘겼으므로, 제네릭 타입은 그에 맞는 타입이 된다.

```jsx
// result of returnData<string>()

function returnData<string>(data: T): T {
    return data
}

// result of returnData<number[]>()
function returnData<number[]>(data: T): T {
    return data
}
```

<br/>

(2) 함수의 인자를 넘기면 타입을 정의한 것과 동일하게 동작한다.

```jsx
// result of returnData<string>(":)")

function returnData<string>(data: string): string {
    return data
}

// result of returnData<number[]>([1,2,3])
function returnData<number[]>(data: number[]): number[] {
    return data
}
```

<br>

### 🤷‍♀️ 이렇게 얼렁뚱땅 담을거면,, 왜 쓰는걸까?

위의 returnData 함수가 generic 대신 union으로 구현되어 있었다면?

```
function returnData(data: string | number): string | number | undefined {
    return data
}
```

고정된 데이터의 타입에 조금의 유연성을 줄 수는 있겠지만, <br/>
어쨌든 지정된 타입들 중에서만 가능한 것은 동일하다. <br/>
어떤 변수가 생길지 모르는 상황에서, <br/>
타입을 이렇게 직접 명시하지 않고 언제든지 변할 수 있는 타입을 통해 보다 유연하게 함수를 구현할 수 있는 장치가 필요하다.

<br/>

함수의 오버로딩으로 문제를 해결할 수도 있지만, <br/>
허용될 타입의 개수가 많아질수록 코드가 길어지고, 가독성이 떨어지게 된다.

<br/>

또는, 위의 returnData 함수가 generic 대신 any로 구현되어 있었다고 가정해보자.

```
function returnData(data: any): any {
    return data
}
```

이 경우, 함수의 동작에 문제가 생기지는 않지만
any는 타입 검사를 하지 않기 때문에
함수의 인자로 어떤 타입이 들어갔고, 어떤 값이 반환되는지는 알 수 없다.

<br/>

generic이 이러한 문제점을 해결해줄 수 있는 이유는 <br/>
generic은 함수나 클래스의 선언 시점이 아닌 '**_사용 시점_** (union의 문제 해결)'에 타입을 '**_선언_** (any의 문제 해결)'할 수 있기 때문이다.

<br/>

## 🌟 [as const](<https://github.com/mobi-community/mobi-path-typescript/blob/Jane/1week/2.%20%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%20%ED%83%80%EC%9E%85%20%EC%A0%95%EC%9D%98/%EA%B3%A0%EA%B8%89(%EC%9C%A0%ED%8B%B8)%ED%83%80%EC%9E%85/4.%20example_asconst.ts>)

    - const assertion 기능을 활용하기 위한 문법적 표현
    - const assertion: 원래 상수가 아닌 것을 상수인 것으로 선언하는 기능

### 🧐 왜 상수가 아닌 것을 상수로 만들어야 할까?

<img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/69c215fb-8ee3-434c-b049-2305132fcac4" width="30%"/> 
<img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/0c221f78-0b09-4299-9211-030bd030658c" width="30%"/>

위의 예시를 보면, let으로 선언하면 할당된 값의 타입으로 추론되지만 <br/>
const로 선언하면 할당된 값 자체를 타입으로 받아온다는 사실을 알 수 있다.
<br/>
위의 코드에서 CONST에 다른 값을 재할당하게 될 경우 타입 에러가 발생한다.
<br/>
( **_상수이므로 'CONST'에 할당할 수 없습니다._** )

> Literal Type

- 할당된 값 그 자체를 타입으로 취급하는 것

> 🤖 let으로 선언한 변수에 as const 문법 적용해보기

<img src="https://github.com/JeongwooHam/FE_Study_Logs/assets/123251211/91d309e8-d662-469e-8ec6-f97730d04698" width="30%"/>

LetToConst에 "hi"라는 값을 재할당하려고 하면 <br/>
**_"hi" 형식은 "hello" 형식에 재할당할 수 없습니다._** 라는 에러가 발생한다.
<br/>
에러 메세지는 const로 선언된 값에 재할당했을 때와 다르긴 하지만, <br/>
TS는 LetToConst를 'hello'라는 타입만 올 수 있는 const로 인식하게 되었다는 점에서 원리상 유사하다.

**🤔 하지만 그냥 const를 쓰면 되는 것 아닌가..?**

> Object의 Value 상수로 만들기

사실 위의 예시는 단순히 let으로 선언된 변수를 const로 수정하기만 해도 된다.
<br/>
as const가 유용하게 사용되는 용례는 따로 있는데, 바로 특정 Object의 Value를 상수화할 때이다. <br/>
JS의 Object(객체, 배열, ...)는 원래 가변적인 데이터 값을 저장하기 위해 탄생했기 때문에 <br/>
Const로 객체를 선언하더라도 특정 Key 값에 오는 Value를 고정시킬 수 없었다. <br/>

이를 해결하기 위해 사용할 수 있는 것이 as const!

1. 객체의 개별 키 값에 대해 설정해주기
   - 설정하지 않은 키에 대한 value는 여전히 수정 가능한 상태
2. 객체 전체를 상수화하기
   - Read Only 타입이 됨

<br/>

## 🌟 [conditional](<https://github.com/mobi-community/mobi-path-typescript/blob/Jane/1week/2.%20%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%20%ED%83%80%EC%9E%85%20%EC%A0%95%EC%9D%98/%EA%B3%A0%EA%B8%89(%EC%9C%A0%ED%8B%B8)%ED%83%80%EC%9E%85/5.%20example.conditional.ts>)

    - 타입 관계 검사를 통해 두 가지 가능한 타입 중 타입 관계 검사로 표현된 조건에 따라 하나 선택
    - 입력된 제네릭 타입에 따라 타입을 결정하는 기능
    - 조건에 따라 값을 결정하는 JS의 삼항 연산자처럼, 타입을 조건에 따라 결정하는 것!
    - 별개의 타입 문법으로 취급됨

> <code>T extends U ? X : Y</code>

    - T, U, X, Y는 모두 타입!
    - T 타입이 U에 할당 가능한 타입이면 X, 아니면 Y라는 타입임을 의미
    - extends 부분을 별개의 제네릭 꺾쇠 괄호 안에 써줄 필요 없음 (별개의 타입 문법으로 취급)

### 📌 분산 조건부 타입

```ts
declare function FUNC<T extends boolean>(
  x: T
): T extends true ? number : number[];

const x = FUNC([1, 2, 3].length >= 1);
```

    위의 코드에서, FUNC의 인자로 전달되는 조건식의 결과가 true이니 당연히 number로 추론될 것 같지만
    x의 타입은 number | number[]로 추론됨
    이는 분산 조건부 타입이 타입을 인스턴스화 중 자동으로 union 타입으로 분산시키기 때문!
    [1, 2, 3].length >= 1이라는 조건식은 boolean 타입을 반환하게 되고,
    따라서 true 또는 false 중 하나의 값을 가지게 될 것이므로,
    x의 타입은 분산 조건부 타입에 의해 number | number[]로 추론됨
    (true extends true ? number : number[]) | (false extends false ? number | number[])

### 📌 infer 키워드

> <code> T extends infer U ? X : Y </code>

1. TS는 엔진으로 하여금 런타임 상황에서 타입을 추론할 수 있도록 추론함
2. 추론한 타입 값을 infer 타입 파라미터인 U에 할당해줌
3. 조건부 타입에 의해 함수의 형태가 참이면 파라미터를, 아니라면 never(무시)

### 📌 미리 정의된 조건부 타입

    조건부 타입을 이용해 미리 helper 함수를 만들어 놓은 것 (유틸 타입과 비슷)
    1. Exclude<T, U>
        : U에 할당할 수 있는 타입은 T에서 제외해줌
    2. Extract<T, U>
        : U에 할당할 수 있는 타입을 T에서 추출해줌
    3. NonNullable<T>
        : T에서 null과 undefined를 제외함
    4. ReturnType<T>
        : 함수 타입의 반환 타입을 얻게 해줌
    5. InstanceType<T>
        : 생성자 함수 타입의 인스턴스 타입을 얻게 해줌

<br/>

## 🌟 [satisfies](<https://github.com/mobi-community/mobi-path-typescript/blob/Jane/1week/2.%20%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%20%ED%83%80%EC%9E%85%20%EC%A0%95%EC%9D%98/%EA%B3%A0%EA%B8%89(%EC%9C%A0%ED%8B%B8)%ED%83%80%EC%9E%85/6.%20example.satisfies.ts>)

    - 리터럴(값)이나 변수를 안전하게 upcast하는 기능을 수행함
    - upcast: 상속받은 자식 클래스를 부모 클래스로 형변환하는 것

### 🧐 왜 satisfies를 사용해야 할까?

> 🤖 TS가 타입을 추론하는 과정

- 예제1: <code>const val = 100</code>

<br/>

1. val의 타입이 명시되어 있지 않음을 확인
2. 100은 number 타입의 리터럴임을 파악
3. val에 리터럴이 할당되므로 val의 타입은 number임을 추론

<br/>

- 예제2: <code>const VAL = { name: "aaa", height: 164 }</code>

1. VAL의 타입이 명시되어 있지 않음을 확인
2. <code>{ name: "aaa", height: 164 }</code>은 <code>{ name: string, height: number }</code> 타입임을 파악
3. VAL에 리터럴이 할당되므로 VAL의 타입은 <code>{ name: string, height: number }</code> 임을 추론

**_이 상황에서 VAL의 grade에만 접근하게 강제하고 싶다면?_**

> 🔎 1. VAL의 타입을 미리 정의하기

<details>
<summary>코드 예시</summary>
<div markdown="1">

```ts
// 1. 안전하게 할당될 수 있는 경우에는 에러 없이 타입 변경
const variable1: { name: string } = { name: "a", score: 90 };
// 2. attribute 속성이 없어 에러 발생
const variable2: { name: string; height: number; attribute: object } = {
  name: "a",
  height: 90,
};
// 3. 에러는 발생하지 않지만 name, height의 타입을 강제할 수 없음
const variable3 = {
  key: { name: "a", height: 90 },
};
// 4. 지정한 name 속성 외에 height라는 속성이 없어 에러 발생
type Variable4 = { key: { name: string } };
const variable4: Variable4 = {
  key: { name: "a", height: 90 },
};
// 5. 필수 속성 중 attibute가 빠져 있어 에러 발생
type Variable5 = { key: { name: string; height: number; attribute: object } };
const variable5: Variable5 = {
  key: { name: "a", height: 90 },
};
```

</div>
</details>

    이처럼 필요할 때마다 해당 속성을 추가해가며 사용할 수도 있지만,
    값이 크고 복잡해질수록 이에 대한 관리비용이 불필요하게 증가할 가능성이 있음

<br/>

> 🔎 2. 'as' 키워드 사용하기

<details>
<summary>코드 예시</summary>
<div markdown="1">

```ts
const variable1 = { name: "a", height: 90 } as { name: string };
const variable2 = {
  key: { name: "a", height: 90 } as { name: string },
};
const variable3 = {
  key: { name: "a", height: 90 } as { name: string },
};
const variable4 = { name: "a", height: 90 } as {
  name: string;
  height: number;
  attribute: object;
};
const variable5 = {
  key: { name: "a", height: 90 } as {
    name: string;
    height: number;
    attribute: object;
  },
};
```

</div>
</details>

    원하는 타입으로 편하게 지정할 수 있는 것처럼 보이지만
    4,5번처럼 필수 속성이 빠진 경우에도 에러가 발생하지 않음
    이는 나중에 해당 변수 사용 시 오류의 원인이 될 수 있음

<br/>

> 🔎 3. 'satisfies' 키워드 사용하기

<details>
<summary>코드 예시</summary>
<div markdown="1">

```ts
// as 키워드처럼 사용이 가능하므로 객체의 key-value 타입 제한 가능
const variable1 = { name: "a", height: 90 } satisfies { name: string };
const variable2 = {
  key: { name: "a", height: 90 } satisfies { name: string },
};
const variable3 = {
  key: { name: "a", height: 90 } satisfies { name: string },
};
// 아래처럼 위험한 케이스에 대해서는 컴파일 에러를 발생시킴
const variable4 = { grnameade: "a", height: 90 } satisfies {
  name: string;
  height: number;
  attribute: object;
};
const variable5 = {
  key: { name: "a", height: 90 } satisfies {
    name: string;
    height: number;
    attribute: object;
  },
};
```

</div>
</details>

<br/>

|                          | 타입 직접 정의하기 | as 키워드 사용하기 | satisfies 키워드 사용하기 |
| :----------------------: | :----------------: | :----------------: | :-----------------------: |
|     안전한 타입 제한     |         ⭕         |         ❌         |            ⭕             |
| 객체 key-value 타입 제한 |         ❌         |         ⭕         |            ⭕             |

## 🛠️ [Utility Types](<https://github.com/mobi-community/mobi-path-typescript/blob/Jane/1week/2.%20%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%20%ED%83%80%EC%9E%85%20%EC%A0%95%EC%9D%98/%EA%B3%A0%EA%B8%89(%EC%9C%A0%ED%8B%B8)%ED%83%80%EC%9E%85/7.%20examples.utilitytypes.ts>)

- 공통 타입 변환을 용이하게 하기 위해 TS에서 제공하는 타입들
- JS에서 for문, while문을 발전시켜 map, find, filter와 같은 고차함수를 사용하는 것과 유사한 개념
- 기본 문법으로도 충분히 타입 변환이 가능하지만 더 간결한 문법으로 타입 정의가 가능해짐
- 전역으로 사용 가능함

### 🌟 Partial<Type>

    - 특정 타입의 부분 집합을 만족하는 타입 정의
    - 타입의 모든 속성을 선택 사항으로 변경한 새로운 타입을 반환
    - 모든 속성의 타입을 optional로 만드는 것은 좋지 않으므로 pick이나 omit을 더 활용하는 편

> Required<T>

    - 타입의 모든 속성을 필수 사항으로 변경한 새로운 타입 반환

### 🌟 Pick<Type, Keys>

    - 특정 타입에서 몇 개의 속성을 선택하여 타입 정의
    - Type으로부터 Keys에 해당하는 속성을 선택하여 따로 모은 타입 반환

### 🌟 Omit<Type, Keys>

    - 특정 타입에서 지정된 속성만 제거한 타입 정의
    - Pick과는 반대로, Type에 해당하는 속성을 제외한 나머지만 모은 타입 반환

### 🌟 ReturnType<Type>

    - 함수를 Type으로 받아 return 타입 반환

<hr/>

#### 📑 References

[1. TypeScript-Handbook 한글 문서](https://typescript-kr.github.io/) <br/>
[2. Advanced TypeScript Type ...](https://www.freecodecamp.org/news/advanced-typescript-types-cheat-sheet-with-examples/) <br/>
[3. TS 공식문서 - Utility Types](https://www.typescriptlang.org/ko/docs/handbook/utility-types.html) <br/>
[4. 타입스크립트 정리 블로그](https://inpa.tistory.com/category/Language/TypeScript) <br/>
[5. TypeScript 4.9 - The Satisfies Operator](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html)
[6. satisfies: 안전한 업캐스팅을 통해 ... ](https://engineering.ab180.co/stories/satisfies-safe-upcasting)
