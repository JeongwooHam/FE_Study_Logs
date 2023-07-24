# 💡 CH4. 액션에서 계산 빼내기

## 🤖 DOM

    - Document Object Model
    - 웹 브라우저 안에 있는 HTML 페이지를 메모리 상에 표현한 것

<br/>

## 🧐 아래 코드에는 어떠한 문제점이 있을까?

```js
let shopping_cart = [];
let shopping_cart_total = 0;

function update_shipping_icons() {
  let buy_buttons = get_buy_buttons_dom();
  for (let i = 0; i < buy_buttons.length; i++) {
    let button = buy_buttons[i];
    let item = button.item;
    if (item.price + shopping_cart_total >= 20)
      button.show_free_shipping_icon();
    else button.hide_free_shipping_icon();
  }
}

function update_tax_dom() {
  set_tax_dom(shopping_cart_total * 0.1);
}

function calc_cart_total() {
  shopping_cart_total = 0;
  for (let i = 0; i < shopping_cart.length; i++) {
    let item = shopping_cart[i];
    shopping_cart_total += item.price;
  }
  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();
}
```

- ### 비즈니스 로직을 테스트하기 어렵다.

  - 코드가 변경될 때마다 아래와 같은 과정을 거쳐야 함
    <br/>: 브라우저 설정 <br/>→ 페이지 로드 <br/>→ 장바구니 버튼 클릭 <br/>→ DOM 업데이트를 기다렸다가 값 받아오기 <br/>→ 받아온 값을 숫자로 변환하여 예상 값과 비교
  - 테스트 전 전역변숫값을 설정해주어야 함

  <br/> 🌟 개선방안

  - DOM 업데이트와 비즈니스 규칙이 분리되어야 함
  - 전역변수가 없어야 함

- ### 재사용이 불가능하다.

  - 장바구니 정보와 관련된 전역 변수는 다른 페이지에서 사용이 불가능하다.
  - 전역 변수와 DOM이 없을 경우 장바구니 관련 정보를 사용할 수 없다.
  - DOM을 변경하는 것이 아니라 해당 값으로 다른 기능을 구현하려고 할 때 해당 결과값을 받을 방법이 없다.

  <br/> 🌟 개선방안

  - 전역변수에 의존하지 않아야 함
  - DOM을 사용할 수 있는 곳에서만 실행된다고 가정하면 안 됨
  - 함수가 결괏값을 반환해야 함

<br/>

## 🧐 함수의 입력과 출력

    * 입력
        - 함수가 계산을 하기 위한 외부 정보
        - 명시적 입력: 인자
        - 암묵적 입력: 인자 외 다른 입력
    * 출력
        - 함수 밖으로 나오는 정보나 어떤 동작
        - 명시적 출력: 리턴값
        - 암묵적 출력: 리턴값 외 다른 출력

```js
let total = 0;

// amount: 인자, (명시적) 입력
function add_to_total(amount) {
  // total: 전역 변수를 읽는 것, (암묵적) 입력
  // console.log: 콘솔에 찍는 것, (암묵적) 출력
  console.log("Old total: " + total);
  // 전역 변수를 바꾸는 것: (암묵적) 출력
  total += amount;
  // 리턴값: (명시적) 출력
  return total;
}
```

### 🤨 함수에 암묵적 입력과 출력이 있으면 액션이 됨

    - 부수효과: 암묵적 입력과 출력
    - 함수가 하려고 하는 주요 기능(리턴값을 계산하는 일)이 아닌 것

### 🌟 함수에서 부수효과를 없애면 계산이 됨!

    - 암묵적 입력은 함수의 인자로, 암묵적 출력은 함수의 리턴값으로 바꾸기

<br/>

## 🧐 테스트와 재사용성은 함수의 입출력과 어떤 관련이 있을까?

### 🌟 DOM 업데이트와 비즈니스 규칙 분리하기

    - DOM을 업데이트하는 일은 암묵적 출력
    - 사용자가 정보를 볼 수 있어야 하므로 DOM 업데이트가 발생하기는 해야함
    - 암묵적 출력을 함수의 리턴값으로 바꾸고, 비즈니스 규칙과 분리해야 함

### 🌟 전역변수 의존성 없애기

    - 전역변수를 읽는 것은 암묵적 입력
    - 전역변수를 바꾸는 것은 암묵적 출력
    - 암묵적 입력을 인자로, 암묵적 출력을 리턴값으로 바꿔야 함

### 🌟 함수가 결괏값을 리턴하도록 하기

    - 암묵적인 출력 대신 명시적인 출력 사용하기

<br/>

## 🤖 어떻게 계산을 추출할 수 있을까?

### 🌟 계산 코드를 찾아 빼내기

    - 코드를 추출해 새로운 함수를 만들고, 필요한 경우 인자를 추가하는 방식으로 리팩터링
    - 원래 코드에서 빼낸 부분에서 새로 생성한 함수를 호출하도록 수정

### 🌟 새 함수 내부에서 암묵적 임력과 출력 찾기

    - 입력: 함수 인자를 포함해 함수 밖에 있는 변수를 읽거나 DB에서 값을 가져오는 것
      ▶ 암묵적 입력: 함수를 부르는 동안 결과에 영향을 줄 수 있는 것
    - 출력: 리턴값을 포함해 전역변수나 공유객체를 바꾸거나, 웹 요청을 보내는 것
      ▶ 암묵적 출력: 함수 호출의 결과로 영향을 받는 것

### 🌟 암묵적 입력은 인자로, 암묵적 출력은 리턴값으로 바꾸기

    - 새로운 리턴값이 생겼다면 호출하는 코드에서 함수의 결과를 새로운 변수에 할당할 수 있음
    - 인자와 리턴값은 불변값이라는 사실에 주의!
