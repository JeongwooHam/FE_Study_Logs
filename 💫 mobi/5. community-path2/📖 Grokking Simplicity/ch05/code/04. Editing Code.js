// 🧐 코드 다시 살펴보기

// 🤖 Before Modification
// '구매하기' 버튼 클릭 시 사용되는 함수
function add_item_to_cart(name, price) {
  shopping_cart = add_item(shopping_cart, name, price);
  calc_cart_total(shopping_cart);
}

// 굳이 새로운 함수로 정의할 필요가 없어보이는 부분
function calc_cart_total(cart) {
  let total = calc_total(cart);
  set_cart_total_dom(total);
  update_shipping_icons(cart);
  update_tax_dom(total);
  // 전역변수에 새로운 값을 할당했지만, 이후 전역변수를 다시 읽는 부분이 없어 불필요한 코드
  shopping_cart_total = total;
}

// ====================================================================

// 🤖 After Modification
function add_item_to_cart(name, price) {
  shopping_cart = add_item(shopping_cart, name, price);
  // calc_cart_total 본문을 함수 내부로 옮김
  let total = calc_total(shopping_cart);
  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart);
  update_tax_dom(total);
  // 사용하지 않는 부분은 없앰
}
