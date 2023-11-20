<p align="center"><img src="https://velog.velcdn.com/images/hamjw0122/post/8d5626d6-4c36-453d-9f8f-93e94a3f92ba/image.png" width="60%"/></p>

## 🤫 암묵적 타입 변환(타입 강제 변환)

- 개발자의 의도와는 상관없이 표현식을 평가하는 도중에 JS 엔진에 의해 암묵적으로 타입이 자동변환되는 것

- 문자열, 숫자, 불리언과 같은 원시 타입 중 하나로 타입을 자동 변환함

### 🔡 문자열 타입으로 변환

- 문자열 연결 연산자(+)의 피연산자 중에서 문자열 타입이 아닌 피연산자를 문자열 타입으로 변환함

```js
// 숫자 타입
1 + '2'             // "12"
0 + ''              // "0"
-0 + ''             // "0"
-1 + ''             // "-1"
NaN + ''            // "NaN"
Infinity + ''       // "Infinity"

// 불리언 타입
true + ''           // "true"
false + ''          // "false"

// null 타입
null + ''           // "null"

// undefined 타입
undefined + ''      // "undefined"

// 객체 타입
({}) + ''           // "[object Object]"
Math + ''           // "[object Math]"
[] + ''             // ""
[10, 20] + ''       // "10, 20"
(function(){}) + '' // "function(){}"
Array + ''          // "function Array(){[native conde]}"

// 심벌 타입 (에러 발생)
(Symbol()) + ''   // TypeError: Cannot convert a Symbol value to a string
```

- 템플릿 리터럴의 표현식 삽입 → 표현식의 평가 결과를 문자열 타입으로 변환함

### 🔢 숫자 타입으로 변환

> 📍 **산술 연산자**

- 산술 연산자의 모든 피연산자는 모두 숫자 타입

- 산술 연산자의 피연산자 중 숫자 타입이 아닌 피연산자를 암묵적 타입 변환함

```js
100 - "50"; // 50
```

- 피연산자를 숫자 타입으로 변환할 수 없는 경우 표현식의 평가 결과는 NaN

```js
100 * "ten"; // NaN
```

> 📍 **비교 연산자**

- 비교 연산자의 모든 피연산자는 모두 숫자 타입

- 비교 연산자의 피연산자 중 숫자 타입이 아닌 피연산자를 암묵적 타입 변환함

```js
100 > "50"; // true
```

> 📍 **+ 단항 연산자**

- 피연산자가 숫자 타입의 값이 아니면 숫자 타입의 값으로 암묵적 타입 변환 수행

- null은 0으로 변환되지만 undefined는 변환되지 않아 NaN이 됨

```js
// 문자열 타입
+"" + // 0 (빈 문자열은 0으로 변환됨)
  "0" + // 0
  "string" + // NaN
  // 불리언 타입
  true + // 1
  false + // 0
  // null 타입
  null + // 0
  // undefined 타입
  undefined + // NaN
  // 객체 타입
  [] + // 0 (빈 배열은 0으로 변환됨)
  {} + // NaN (객체는 변환되지 않아 NaN이 됨)
  [1, 2] + // NaN (빈 배열이 아닌 배열은 변환되지 않아 NaN이 됨)
  function () {} + // NaN
  // 심벌 타입
  Symbol();
```

### 🆗 불리언 타입으로 변환

- 제어문, 삼항 조건 연산자의 조건식은 불리언 값으로 평가되어야 하는 표현식 → 조건식의 평가 결과를 불리언 타입으로 변환함

- JS 엔진은 불리언 타입이 아닌 값을 Truthy 값 또는 Falsy 값으로 구분함

> 📍 **Falsy 값 (false로 평가됨)**

- false

- undefined

- null

- 0, -0

- NaN

- '' (빈 문자)

> 📍 \*\*Truthy값 (true로 평가됨)188

- Falsy값 이외의 모든 값

- 빈 문자열이 아닌 문자열

- {} (빈 객체)

- [] (빈 배열)

## 🤗 명시적 타입 변환(타입 캐스팅)

- 개발자가 의도적으로 값의 타입을 변환하는 것

- 표준 빌트인 생성자 함수를 new 연산자 없이 호출하는 방법 / 빌트인 메서드를 사용하는 방법 / 암묵적 타입 변환을 이용하는 방법

### 🔡 문자열 타입으로 변환

> 💡 **String 생성자 함수를 new 연산자 없이 호출**

```js
String(0); // "0"
String(NaN); // "NaN
String(true); // "true"
```

> 💡 **Object.prototype.toString 메서드**

```js
(1).toString(); // "1"
Infinity.toString(); // "Infinity"
false.toString(); // "false"
```

> 💡 **문자열 연결 연산자**

```js
5 + ""; // "5"
true + ""; // "true"
```

### 🔢 숫자 타입으로 변환

> 💡 **Number 생성자 함수를 new 연산자 없이 호출**

```js
Number("-1"); // -1
Number("3.14"); // 3.14
Number(true); // 1
Number(false); // 0
```

> 💡 **parseInt, parseFloat 함수 (문자열만 변환 가능)**

```js
parseInt("0"); // 0
parseFloat("3.14"); // 3.14
```

> 💡 **+ 단항 산술 연산자**

```js
+"-1"; // -1
+true; // 1
```

> 💡 **'\*' 단항 산술 연산자**

```js
"3.14" * 1; // 3.14
false * 1; // 0
```

### 🆗 불리언 타입으로 변환

> 💡 **Boolean 생성자 함수를 new 연산자 없이 호출**

```js
Boolean(""); // false
Boolean("false"); // true

Boolean(0); // false
Boolean(NaN); // false

Boolean(null); // false

Boolean({}); // true
```

> 💡 **! 부정 논리 연산자를 두 번 사용**

```js
!!"a"; // true

!!100; // true
!!Infinity; // true

!!undefined; // false

!![]; // true
```

<hr/>

- 타입 변환이 기존 원시 값을 직접 변경하는 것은 아니고 기존 원시 값을 사용해 다른 타입의 새로운 원시 값을 생성하는 것

- 기존 변수 값을 재할당하여 변경하는 것이 아니라 피연산자의 값을 타입 변환해 새로운 타입의 값을 만들어 단 한번 사용하고 버림

## ⏩ 단축 평가

### 📍 논리 연산자를 사용한 단축 평가

- 논리합(||) 또는 논리곱(&&) 연산자 표현식이 논리 연산의 결과를 결정하는 피연산자를 타입 변환하지 않고 그대로 반환하는 것

- 표현식을 평가하는 도중에 평가 결과가 확정된 경우 나머지 평가 과정을 생략하는 것

![](https://velog.velcdn.com/images/hamjw0122/post/25a777ca-0d69-4f09-a92e-2365ffb6ea47/image.png)

- 단축평가로 if문 대체 가능

```js
let message = "";

// 주어진 조건이 true일 때
let result1 = true;

if (result1) message = "done";
// 단축평가로 대체(&&)
message = result1 && "done"; // result1이 true라면 'done'(anything)을 할당

// 주어진 조건이 false일 때
let result2 = false;

if (!result2) message = "undone";
// 단축평가로 대체(||)
message = result2 || "undone"; // result2가 false라면 'undone'(anything)을 할당
```

### 💫 단축 평가가 유용하게 사용되는 경우

> **객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때**

```js
let obj = null; // obj  참조 시 타입 에러 발생

// obj가 Falsy 값이면 obj, Truthy 값이면 obj.value로 평가됨
let value = obj && obj.value; // null
```

> **함수 매개변수에 기본값을 설정할 때**

```js
// 함수 호출 시 인수를 전달하지 않으면 매개변수에 undefined가 할당됨

function getLength(str) {
  str = str || "";
  return str.length;
}

getLength(); // str이 Falsy 값이므로 '' 로 평가됨
getLength("hello"); // str이 Truthy 값이므로 str로 평가됨
```

### 📍 옵셔널 체이닝 연산자(?.) (ES11)

- 좌항의 피연산자가 null, undefined인 경우 undefined 반환 / 아닌 경우 우항의 프로퍼티 참조

```js
let el = null;

let value = el?.value;
console.log(value); // undefined
```

- 논리 연산자 && 과는 달리 좌항 피연산자가 Falsy 값이라도 null/undefined가 아니면 우항의 프로퍼티 참조

```js
// 논리 연산자 &&
let el = "";

let value = el && el.length;
console.log(value); // '' (el은 Falsy 값이므로 el 그대로 참조)

// 옵셔널 체이닝 연산자 ?.
let value = el?.el.length;
console.log(value); // 0 (el이 null이나 undefined가 아니므로 우항의 프로퍼티 참조)
```

### 📍 null 병합 연산자(??) (ES11)

- 좌항의 피연산자가 null, undefined인 경우 우항의 피연산자 반환 / 아닌 경우 좌항의 피연산자 반환

```js
let foo = null ?? "default value";
console.log(foo); // "default value"
```

- 변수에 기본값 설정 시 유용

```js
// 논리 연산자 ||
let foo = "" || "default value";
console.log(foo); // 'default value' (el이 Falsy 값이므로 ''이 기본값으로서 유효하더라도 우항의 프로퍼티 참조)

// null 병합 연산자 ??
let foo = "" ?? "default value";
console.log(foo); // "" (el이 null이나 undefined가 아니므로 좌항의 피연산자 그대로 반환)
```
