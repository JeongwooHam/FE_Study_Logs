# 💡 CH6. 변경 가능한 데이터 구조를 가진 언어에서 불변성 유지하기

## 🤔 중첩된 데이터란?

    - 데이터 구조 안에 데이터 구조가 있는 경우
    - 예: 배열 안에 객체가 있는 경우
    - 깊이 중첩된 데이터: 중첩이 이어짐을 의미함

   <br/>

## 🛠️ 동작 분류하기

### 📑 읽기

    - 데이터에서 정보 가져오기
    - 데이터 변경 X
    - 예: 제품 개수 가져오기, 제품 이름으로 제품 가져오기

### ✏️ 쓰기

    - 데이터 변경 O
    - 예: 제품 추가하기, 제품 이름으로 제품 빼기, 제품 이름으로 제품 구매 수량 바꾸기
    - 불변성 원칙에 따라 구현해야 함

   <br/>

## 🚥 JS 배열 훑어보기

    - JS 기본 컬렉션
    - 순서 있는 값을 나타내므로 인덱스로 접근할 수 있음
    - 다른 타입의 항목을 동시에 가질 수 있으며, 크기를 늘리거나 줄일 수 있음

### 🤔 배열에 항목이 다른 배열/객체 참조 시 .slice()를 해도 참조하는 배열이나 객체는 복사되지 않음!

    - .slice()는 범위를 정해 배열의 일부분을 복사하거나 잘라내어 반환함
    - 이때 원래의 배열을 수정하는 것이 아니라 새로운 배열을 반환함
    - 하지만 원본 배열 내부의 항목들이 객체나 배열인 경우 (예: 중첩 배열) 해당 값들은 여전히 원본 객체/배열을 참조하게 됨
    - 따라서, .slice로 내부의 객체/배열 변경 시 원본 배열의 객체/배열도 변경됨

<details>
<summary>코드 예시</summary>
<div markdown="1">

```js
const arr1 = [
  { a: "첫 번째 객체" },
  { b: "두 번째 객체" },
  { c: "세 번째 객체" },
];
const arr2 = arr1.slice();

// arr1과 arr2는 다른 배열이지만 객체 항목은 동일한 참조를 유지
console.log(arr1[0] === arr2[0]); // true

// arr2의 첫번째 객체 항목의 a 속성 변경
arr2[0].a = "1번 객체";
console.log(arr1[0].a); // 1번 객체
console.log(arr2[0].a); // 1번 객체
```

</div>
</details>

<br/>

## 🖨️ COPY-ON-WRITE

### 📢 쓰기를 읽기로 바꾸자!

[수정 예시](https://github.com/JeongwooHam/FE_Study_Logs/blob/master/%F0%9F%92%AB%20mobi/5.%20community-path2/%F0%9F%93%96%20Grokking%20Simplicity/ch06/code/00.%20Converting%20Write%20to%20Read.js)

### 🤔 불변형 데이터 구조란?

    - 함수형 프로그래밍 언어의 일반적인 기능이지만 지원하지 않는 경우 多
    🌟 불변형 데이터 구조를 기본으로 지원하는 언어
        1. 하스켈
        2. 클로저
        3. 엘름
        4. 퓨어스크립트
        5. 얼랭
        6. 엘릭서
    - JS는 기본적으로 변경 가능한 데이터 구조를 사용하므로, 직접 구현해야 함

### 🤖 3 Steps of COPY-ON-WRITE

1. 복사본 만들기
   <br/>
   <code> const new_array = array.slice() </code>
2. (원하는 만큼) 복사본 변경하기
   <br/>
   <code> new_array.push(elem) </code>

3. 복사본 리턴하기
   <br/>
   <code> return new_array </code>

<br/>

### 🧐 쓰기와 읽기를 동시에 하는 동작은 어떻게 처리할 수 있을까?

<details>
<summary>읽고 변경하는 일을 동시에 하는 동작의 예시</summary>
<div markdown="1">

```js
const a = [1, 2, 3, 4];
const b = a.shift();

console.log(b); // 1
console.log(a); // [2, 3, 4] > 실제 데이터의 값도 바뀜

// 값을 바꾸는 동시에 배열의 첫 번째 항목 리턴하므로 변경하면서 읽는 동작
```

</div>
</details>
<br/>

> copy-on-write에서는 쓰기를 읽기로 바꿔야 하는데, 이미 쓰기이면서 동시에 읽기로서 값을 리턴하고 있다면?

[1. 읽기와 쓰기 함수로 각각 분리하기](https://github.com/JeongwooHam/FE_Study_Logs/blob/master/%F0%9F%92%AB%20mobi/5.%20community-path2/%F0%9F%93%96%20Grokking%20Simplicity/ch06/code/03.%20Splitting%20Function%20That%20Does%20Both%20Actions.js)
<br/>
[2. 함수에서 값을 두 개 리턴하기](https://github.com/JeongwooHam/FE_Study_Logs/blob/master/%F0%9F%92%AB%20mobi/5.%20community-path2/%F0%9F%93%96%20Grokking%20Simplicity/ch06/code/04%2C%20Making%20Function%20to%20Return%20Two%20Values.js)

<br/>

### 📢 유의할 점

    1. 변경 가능한 데이터를 읽는 것은 액션
    2. 쓰기는 데이터를 변경 가능한 구조로 만듦 → 쓰기가 없다면 불변형 데이터
    3. 변경 불가능한 데이터를 읽는 것은 계산
    4. 쓰기를 읽기로 만들면 액션은 줄어들고 계산은 많아짐

<br/>

### 🤔 데이터가 모두 불변형이라면, 시간에 따라 변하는 상태는 어떻게 다뤄야 할까?

    - 예: shopping_cart 전역 변수
    - 안에 들어가야 할 값이 바뀔 때마다 새로운 값 할당
    - 해당 전역변수는 항상 최신값을 나타냄
    - 새 값으로 교체하는 방식을 사용하면 되돌리기 구현도 쉬워짐

### 🧐 불변 데이터 구조 구현이 너무 비효율적인 것은 아닐까?

    실제로 변경 가능한 데이터 구조보다 메모리를 더 많이 쓰고 느림
    BUT
    1. 언제든지 최적화할 수 있다!
    2. 가비치 콜렉터는 매우 빠르다!
    3. 생각보다 많이 복사하지 않는다!
        - 얕은 복사, 구조적 공유
    4. 함수형 프로그래밍 언어에는 빠른 구현체가 있다!
        - 데이터 구조 복사 시 최대한 많은 구조를 공유함
        - 더 적은 메모리를 사용하고, 가비지 콜렉터의 부담을 줄여줌
        - copy-on-write 기반으로 작동
        - 예: 클로저

<br/>

## 🚦 JS 객체 훑어보기

### 🧮 객체에 대한 연산

1. 키로 값 찾기
   <br/>
   <code>object["a"]</code> 또는 <code>object.a</code>
2. 키로 값 설정하기
   <br/>
   <code>object["a"] = 100</code> 또는 <code>object.a = 99</code>
3. 키/값 쌍 지우기
   <br/>
   <code>delete object["a"]</code>
4. 객체 복사하기
   <br/>
   <code>Object.assign({}, object)</code> → 첫 번째 인자에 두 번째 인자의 모든 키 값 복사 (값이 변경됨)
   <br/>
5. 키 목록 가져오기
   <br/>
   <code>Object.keys(object)</code>

### 🖨️ 객체에 대한 copy-on-write

> 얕은 복사 (Shallow Copy)

- 중첩된 데이터 구조의 최상위 데이터만 복사함
- 예: 객체가 들어있는 배열이라면, 배열만 복사하고 내부의 객체는 참조로 공유

> 구조적 공유 (Structural Sharing)

- 두 개의 중첩된 데이터 구조가 어떤 참조를 공유하는 경우
- 불변 데이터 구조라면 안전함
- 메모리를 적게 사용하고, 모든 것을 복사하는 것보다 빠름

### 🖨️ 중첩 데이터에 대한 copy-on-write

> 중첩 데이터 (Nested Data)

- 데이터 구조 안에 데이터 구조가 있는 것
- 최상위 데이터, 안쪽 데이터

> 얕은 복사

- 중첩 데이터에서 최상위 데이터 구조만 복사함

> 구조적 공유

- 두 중첩된 데이터 구조에서 안쪽 데이터가 같은 데이터를 참조함

> 📢 주의할 점

- 최하위부터 최상위까지 중첩된 데이터 구조의 보든 부분이 불변형이어야 함
- 배열 항목은 바뀌지 않지만 배열 항목이 참조하는 값이 바뀐다면 불변 데이터가 아님
- 중첩된 데이터의 일부를 바꾸려면 변경하려는 값 뿐만 아니라 상위의 모든 값을 복사해야 함
