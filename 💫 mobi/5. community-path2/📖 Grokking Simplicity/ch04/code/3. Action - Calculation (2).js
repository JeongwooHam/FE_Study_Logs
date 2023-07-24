// Page 71

/// Original

function add_item_to_cart(name, price) {
  // ======================
  shopping_cart.push({
    name: name,
    price: price,
  });
  // ======================

  calc_cart_total();
}

// 함수 추출하기
function add_item_to_cart(name, price) {
  add_item(name, price);
  calc_cart_total();
}
// 전역 변수를 직접 바꾸고 있으므로 아직 액션!
function add_item(name, price) {
  // 입력: 전역 변수를 읽어옴 (암묵적)
  // 출력: push 함수로 전역 변수 수정 (암묵적)
  shopping_cart.push({
    name: name,
    price: price,
  });
}

// 명시적 입력으로 수정하기
function add_item_to_cart(name, price) {
  add_item(shopping_cart, name, price);
  calc_cart_total();
}
// cart라는 인자를 추가하여 전역변수를 직접 참조하지 않도록 수정
function add_item(cart, name, price) {
  cart.push({
    name: name,
    price: price,
  });
}

// 명시적 출력으로 수정하기
function add_item_to_cart(name, price) {
  shopping_cart = add_item(shopping_cart, name, price);
  calc_cart_total();
}

function add_item(cart, name, price) {
  // 불변성 구현을 위해 Copy-On-Write 방법 사용
  // 전역변수를 직접 바꾸는 대신 복사본을 만들고, 이를 수정한 값을 리턴
  // 복사본을 만들어 지역변수에 할당 후 해당 값 변경
  let new_cart = cart.slice();
  new_cart.push({
    name: name,
    price: price,
  });
  return new_cart;
}
