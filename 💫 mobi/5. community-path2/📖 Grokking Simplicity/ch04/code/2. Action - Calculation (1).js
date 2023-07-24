function calc_cart_total() {
  // 표시된 부분을 함수로 빼냄
  // ======================
  shopping_cart_total = 0;
  for (let i = 0; i < shopping_cart.length; i++) {
    let item = shopping_cart[i];
    shopping_cart_total += item.price;
  }
  // ======================

  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();
}

/// 서브루틴 추출하기
// 기존 코드에서 동작은 바뀌지 X
// 빼낸 코드를 새로운 함수로 만들고 이름을 붙여줌 + 원래 코드에서 빼낸 부분은 새로 만든 함수를 호출하도록 수정
function calc_cart_total() {
  calc_total();
  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();
}

function calc_total() {
  // 출력: 전역변수의 값을 바꿈 (암묵적)
  shopping_cart_total = 0;
  // 입력: 전역변수의 값을 읽어옴 (암시적)
  for (let i = 0; i < shopping_cart.length; i++) {
    let item = shopping_cart[i];
    // 출력: 전역변수의 값을 바꿈 (암묵적)
    shopping_cart_total += item.price;
  }
}

/// 위에서 출력은 모두 같은 전역변수값을 바꾸므로 같은 리턴값을 사용해 바꿀 수 있음

function calc_cart_total() {
  // 함수를 호출하는 쪽에서 전역변수에 값을 할당하도록 함
  // calc_total()에서 리턴값을 받아와 전역변수에 할당함
  shopping_cart_total = calc_total();
  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();
}

// 암묵적 출력 없애기
function calc_total() {
  // 지역변수로 바꿈
  let total = 0;
  for (let i = 0; i < shopping_cart.length; i++) {
    let item = shopping_cart[i];
    // 지역변수의 값을 수정
    total += item.price;
  }
  // 지역변수 리턴
  return total;
}

// 암묵적 입력을 함수 인자로 바꾸기
function calc_cart_total() {
  shopping_cart_total = calc_total(shopping_cart);
  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();
}

// 전역변수 대신 cart라는 인자를 만들어 사용
function calc_total(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    total += item.price;
  }
  return total;
}

// 🌟 이제 calc_total은 전역변수에 의존하지 않는 계산이 되었음! 모든 입력은 인자, 모든 출력은 리턴값이 됨
