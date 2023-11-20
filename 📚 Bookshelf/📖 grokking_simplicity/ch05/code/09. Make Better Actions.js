// 🤖 Before Modification
// 함수가 하는 역할: 💸(구매하기 버튼 관련 동작), 🛒(cart, item 관련 동작), 🛠️(DOM 관련 동작)
function update_shipping_icons(cart) {
  // 모든 버튼을 가져오기 💸
  let buy_buttons = get_buy_buttons_dom();
  // 버튼에 대해 반복문 실행하기 💸
  for (let i = 0; i < buy_buttons.length; i++) {
    let button = buy_buttons[i];
    // 버튼에 관련된 제품을 가져오기 💸
    let item = button.item;
    // 가져온 제품을 가지고 새 장바구니 만들기 🛒
    let new_cart = add_item(cart, item);
    // 장바구니가 무료 배송이 필요한지 확인하기 🛒
    // 결과에 따라 아이콘 표시하거나 감추기 🛠️
    if (gets_free_shipping(new_cart)) button.show_free_shipping_icon();
    else button.hide_free_shipping_icon();
  }
}

// ====================================================================

// 🤖 After Modification

// 💸 구매하기 버튼 관련 동작
function update_shipping_icons(cart) {
  let buy_buttons = get_buy_buttons_dom();
  for (let i = 0; i < buy_buttons.length; i++) {
    let button = buy_buttons[i];
    let item = button.item;
    let hasFreeShipping = gets_free_shipping_with_item(cart, item);
    set_free_shipping_icon(button, hasFreeShipping);
  }
}
// 🛒 cart, item 관련 동작
function gets_free_shipping_with_item(cart, item) {
  let new_cart = add_item(cart, item);
  return gets_free_shipping(new_cart);
}
// 🛠️ DOM 관련 동작
function set_free_shipping_icon(button, isShown) {
  if (isShown) button.show_free_shipping_icon();
  else button.hide_free_shipping_icon();
}
