// 🤖 Before Modification
function update_shipping_icons() {
  let buttons = get_buy_buttons_dom();
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    let item = button.item;
    // shopping_cart라는 전역변수를 직접 읽어서 사용함 (암묵적 입력)
    let new_cart = add_item(shopping_cart, item.name, item.price);
    if (gets_free_shipping(new_cart)) button.show_free_shipping_icon();
    else button.hide_free_shipping_icon();
  }
}

// ====================================================================

// 🤖 After Modification
// cart라는 인자를 받아옴 (명시적 입력)
function update_shipping_icons(cart) {
  let buttons = get_buy_buttons_dom();
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    let item = button.item;
    // 전역변수 대신 인자 사용
    let new_cart = add_item(cart, item.name, item.price);
    if (gets_free_shipping(new_cart)) button.show_free_shipping_icon();
    else button.hide_free_shipping_icon();
  }
}

// Before Modification
function calc_cart_total() {
  shopping_cart_total = calc_total(shopping_cart);
  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();
}

// After Modification
function calc_cart_total() {
  shopping_cart_total = calc_total(shopping_cart);
  set_cart_total_dom();
  // 함수 내부에서 전역변수를 읽지 않는 대신 인자로 전달
  update_shipping_icons(shopping_cart);
  update_tax_dom();
}
