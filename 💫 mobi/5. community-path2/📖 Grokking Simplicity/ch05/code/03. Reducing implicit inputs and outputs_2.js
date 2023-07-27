/*
[My Answer]

function add_item_to_cart(cart, name, price) {
  shopping_cart = add_item(cart, name, price);
  calc_cart_total(cart);
}

function calc_cart_total(cart) {
  const new_shopping_cart_total = calc_total(cart);
  set_cart_total_dom(new_shopping_cart_total);
  update_shipping_icons(cart));
  update_tax_dom(new_shopping_cart_total);
}

function set_cart_total_dom(new_cart) {
  // ...
  new_cart;
  //...
}

function update_shipping_icons(cart) {
  let buy_buttons = get_buy_buttons_dom();
  for (let i = 0; i < buy_buttons.length; i++) {
    let button = buy_buttons[i];
    let item = button.item;
    let new_cart = add_item(cart, item.name, item.price);
    if (gets_free_shipping(new_cart)) button.show_free_shipping_icon();
    else button.hide_free_shipping_icon();
  }
}

function update_tax_dom(new_cart) {
  set_tax_dom(calc_tax(new_cart));
}

*/

// Answer

// 여기서는 전역변수를 읽음!
function add_item_to_cart(name, price) {
  shopping_cart = add_item(shopping_cart, name, price);
  // 전역변수를 인자로 전달
  calc_cart_total(shopping_cart);
}

function calc_cart_total(cart) {
  // 전역변수를 직접 바꾸는 것이 아니래 새로운 변수에 할당
  let total = calc_total(cart);
  // 새로운 변수를 인자로 보내 전역변수를 읽지 않게 함
  set_cart_total_dom(total);
  update_shipping_icons(cart);
  update_tax_dom(total);
  // 전역변수 값을 수정하는 부분
  shopping_cart_total = total;
}

function set_cart_total_dom(total) {
  //...
  total;
  //...
}

function update_shipping_icons(cart) {
  let buttons = get_buy_buttons_dom();
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    let item = button.item;
    let new_cart = add_item(cart, item.name, item.price);
    if (gets_free_shipping(new_cart)) button.show_free_shipping_icon();
    else button.hide_free_shipping_icon();
  }
}

// 전역변수를 읽는 대신 인자를 받아오도록 수정
function update_tax_dom(total) {
  set_tax_dom(calc_tax(total));
}
