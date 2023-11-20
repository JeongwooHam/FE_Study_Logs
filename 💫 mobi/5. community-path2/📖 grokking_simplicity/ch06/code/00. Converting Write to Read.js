function remove_item_by_name(cart, name) {
  let idx = null;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) idx = i;
  }
  // splice로 장바구니 변경
  if (idx !== null) cart.splice(idx, 1);
}
// 🤔 하지만 이 경우 전역변수를 인자로 넘기면 전역변수 자체가 변경됨

// copy-on-write 적용
function remove_item_by_name(cart, name) {
  // 1. 복사본 만들기
  let new_cart = cart.slice();
  let idx = null;
  // 2. 복사본 변경하기
  for (let i = 0; i < new_cart.length; i++) {
    if (new_cart[i].name === name) idx = i;
  }
  if (idx !== null) new_cart.splice(idx, 1);
  // 3. 복사본 리턴하기
  return new_cart;
}

// 호출하는 부분 변경하기

// 🤖 Before Modification
function delete_handler(name) {
  // 함수의 인자로 전역변수를 넘겨 함수 내부에서 변경해주었음
  remove_item_by_name(shopping_cart, name);
  let total = calc_total(shopping_cart);
  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart);
  update_tax_dom(total);
}

// 🤖 After Modification
function delete_handler(name) {
  // 호출하는 부분에서 전역변수 변경
  shopping_cart = remove_item_by_name(shopping_cart, name);
  let total = calc_total(shopping_cart);
  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart);
  update_tax_dom(total);
}
