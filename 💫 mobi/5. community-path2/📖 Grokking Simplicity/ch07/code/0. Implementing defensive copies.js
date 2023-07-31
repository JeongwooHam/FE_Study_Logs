// 🤖 Before Modification

function add_item_to_cart(name, price) {
  let item = make_cart_item(name, price);
  shopping_cart = add_item(shopping_cart, item);
  let total = calc_total(shopping_cart);
  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart);
  update_tax_dom(total);
  // 인자로 들어가는 장바구니 값을 바꾸는 함수
  black_friday_promotion(shopping_cart);
}

// 🤖 After Modification
// 데이터가 시스템에서 나갈 때와 들어올 때 복사

// 1. 데이터를 전달하기 전 깊은 복사
function add_item_to_cart(name, price) {
  let item = make_cart_item(name, price);
  shopping_cart = add_item(shopping_cart, item);
  let total = calc_total(shopping_cart);
  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart);
  update_tax_dom(total);
  // 장바구니 값을 넘기기 전 깊은 복사를 해서 함수에 넘김
  let cart_copy = deepCopy(shopping_cart);
  // 이제 인자로 넘긴 장바구니의 원본 값이 바뀌지 않음
  black_friday_promotion(cart_copy);
}

// 2. 데이터를 전달한 후에 깊은 복사
function add_item_to_cart(name, price) {
  let item = make_cart_item(name, price);
  shopping_cart = add_item(shopping_cart, item);
  let total = calc_total(shopping_cart);
  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart);
  update_tax_dom(total);
  let cart_copy = deepCopy(shopping_cart);
  black_friday_promotion(cart_copy);
  // cart_copy의 참조를 가진 black_friday_promotion이 cart_copy의 값을 직접 바꾼다면
  // 에러가 발생할 가능성이 있으므로
  // 들어오는 데이터에 대해서도 방어적 복사 적용 필요
  shopping_cart = deepCopy(cart_copy);
}
