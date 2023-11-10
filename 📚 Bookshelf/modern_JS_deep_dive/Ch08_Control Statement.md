<p align="center"><img src="https://velog.velcdn.com/images/hamjw0122/post/81123941-48ea-47d3-bbb8-63bdcda9bce5/image.png" width="60%"/></p>

## 🧐 제어문이란?

- 조건에 따라 코드 블록을 실행하거나 반복 실행할 때 사용함

- 위에서 아래 방향으로 순차 실행되는 코드의 흐름을 인위적으로 제어할 수 있음

## 🧱 블록문

- 🟰 코드 블록, 블록

- 0개 이상의 문을 중괄호로 묶은 것

- 하나의 실행 단위로 취급

- 문의 종료를 의미하는 자체 종결성을 가지므로 끝에 세미콜론(;)을 붙이지 않음

## ☑️ 조건문

- 주어진 조건식의 평가 결과에 따라 코드 블록(블록문)의 실행을 결정함

### 📍 if ... else문

```js
if (조건식1){
     // 조건식1이 참이면 실행되는 코드 블록
} else if (조건식2){
     // 조건식2가 참이면 실행되는 코드 블록
} ...
  else if (조건식N){
     // 조건식N이 참이면 실행되는 코드 블록
} else {
     // 위의 조건식들이 모두 거짓이면 실행되는 코드 블록
}
```

- else if 문과 else 문은 옵션

- else if 문은 여러 번 사용할 수 있음

- 코드 블록 내의 문이 하나뿐이라면 중괄호를 생략할 수 있음

```js
let num = -5;
let result;

if (num > 0) result = "양수";
else if (num < 0) result = "음수";
else result = "영";

console.log(result); // 음수

// 대부분의 if ... else 문은 삼항 조건 연산자로 바꿔 쓸 수 있음
let result = num ? (num > 0 ? "양수" : "음수") : "영";

console.log(result); // 음수
```

### 📍 switch문

- 주어진 표현식을 평가하여 그 값과 일치하는 표현식을 갖는 case 문으로 실행 흐름을 옮김

- 논리적 참, 거짓으로 실행할 코드 블록을 결정하는 if ... else 문과 달리 switch문은 다양한 상황(case)에 따라 실행할 코드 블록을 결정할 때 사용

- 표현식의 값이 boolean 값보다는 문자열/숫자 값인 경우 多

> ⚠️ 주의사항: **_폴스루(fall through)_**

- case 문의 마지막에 break 문을 사용하지 않을 때
- 표현식의 평가 결과와 일치하는 case 문으로 실행 흐름이 이동하여 문을 실행한 후 switch 문을 탈출하지 않고 switch 문이 끝날 때까지 이후의 모든 case 문과 default 문을 실행하게 된다.

```js
switch (표현식) {
   case 표현식1:
      표현식과 표현식1이 일치하면 실행될 문;
      break;
   case 표현식2:
      표현식과 표현식2가 일치하면 실행될 문;
      break;
   ...
   case 표현식n:
      표현식과 표현식n이 일치하면 실행될 문;
      break;
   default:
      표현식과 일치하는 case 문이 없을 때 실행될 문;
      // 실행 종료 시 swtich 문을 빠져나가므로 break 문 필요 없음
}
```

## 🔁 반복문

### 🧐 반복문은 어떻게 동작할까?

```
1️⃣ 조건식의 평가 결과가 참인 경우 코드 블록 실행

2️⃣ 그 후 조건식을 다시 평가하여 여전히 참인 경우 코드 블록 다시 실행

3️⃣ 조건식이 거짓일 때까지 반복됨
```

### 📍 for 문

- 조건식이 거짓으로 평가될 때까지 코드 블록을 반복 실행함

- 반복 횟수가 명확할 때 주로 사용

- 변수 선언문, 조건식, 증감식 모두 optional

```js
for (변수 선언문 또는 할당문; 조건식; 증감식) {
   조건식이 참인 경우 반복 실행될 문;
}
```

> 💡 **for 문의 실행 순서**

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
} // 0, 1, 2
```

```
1️⃣ 변수 선언문 let i = 0 이 실행됨 (단 한번만 실행)

2️⃣ 조건식 실행 ➡️ 현재 i의 값은 0이므로 조건식 i < 3의 평가 결과는 true

3️⃣ 조건식의 평가 결과가 true이므로 코드 블록 실행

4️⃣ 증감식 i++ 실행 ➡️ i 변수의 값이 1이 됨

5️⃣ 조건식 실행 (변수 선언문은 다시 실행되지 않음), 코드 블록 실행, 증감식 실행 ➡️ i 변수의 값이 2가 됨

6️⃣ 조건식 실행, 코드 블록 실행, 증감식 실행 ➡️ i 변수의 값이 3이 됨

7️⃣ 조건식 실행 ➡️ 현재 i의 값은 3이므로 조건식의 평가 결과가 false가 되어 for 문의 실행이 종료
```

- 어떤 식도 선언하지 않으면 무한 루프 발생

```js
for (;;) {...}
```

### 📍 while 문

- 주어진 조건식의 평가 결과가 참이면 코드 블록을 계속해서 반복 실행함

- 반복 횟수가 불명확할 때 주로 사용

```js
let count = 0;

while (count < 5) {
  // count의 값이 5가 되면 조건문의 평가 결과가 거짓이 되므로 코드 블록을 실행하지 않고 종료
  console.log(count); // 0 1 2 3 4
  count++;
}
```

- 조건식의 평가 결과가 언제나 참이면 무한 루프 발생
  - ➡️ if 문으로 탈출 조건을 만들고 break 문을 사용하여 탈출해야 함

```js
while(true){
   ...
   if (탈출 조건) break;
}
```

### 📍 do ... while 문

- 코드 블록을 먼저 실행하고 조건식을 평가함 ➡️ 코드 블록이 무조건 한 번 이상 실행됨

```js
let count = 3;

do {
  console.log(count); // 3 (아래 조건식의 평가 결과가 거짓이더라도 한 번은 실행됨)
  count++;
} while (count < 3);
```

## ⏹️ break문

- 레이블 문, 반복문, switch 문의 코드 블록을 탈출함

  - 그 외의 경우에 break 문을 사용하면 SyntaxError 발생

- 레이블 문을 제외한 경우에는 break 문에 레이블 식별자 지정 X

```js
if(true){
   break; // Uncaught SyntaxError: Illegal break statement
}
```

### 📍 레이블 문

- 식별자가 붙은 문

- 프로그램의 실행 순서를 제어하는 데 사용됨

- switch 문의 case 문과 default 문이 해당됨

```js
// label_a 라는 식별자가 붙은 레이블 블록문
label_a: {
  console.log(1);
  console.log(2);
  break label_a; // 레이블 블록문을 탈출함. break 문에 레이블 식별자 지정
  console.log(3);
} // 1 2만 콘솔에 출력
```

## ⏭️ continue문

- 반복문의 코드 블록 실행을 현 지점에서 중단하고 반복문의 증감식으로 실행 흐름을 이동시킴

- break 문처럼 반복문을 탈출하는 것은 아님

- if 문 내에 코드를 모두 작성하는 것보다 들여쓰기가 한 단계 덜 깊어지므로 가독성이 더 좋음
  - if 문 내에서 실행해야 할 코드가 한 줄인 경우 제외

```js
let string = "jelly jelly";
let search = "l";
let count = 0;

// if 문 내에 코드를 작성하는 경우
for (let i = 0; i < string.length; i++) {
  // l이면 count 증가시킴
  if (string[i] === search) {
    count++;
  }
}

// continue 문을 사용하는 경우
for (let i = 0; i < string.length; i++) {
  if (string[i] !== search) continue;

  count++; // 들여쓰기 X
}
```
