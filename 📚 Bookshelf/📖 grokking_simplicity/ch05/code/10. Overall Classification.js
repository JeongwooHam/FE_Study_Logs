// 🤸‍♀️ ACTION, 🧮 CALCULATION, 📊 DATA

// 🤸‍♀️: 전역변수
let shopping_cart = [];

// 🤸‍♀️: 전역변수를 읽어옴
function add_item_to_cart(name, price) {
  let item = make_cart_item(name, price);
  shopping_cart = add_item(shopping_cart, item);
  let total = calc_total(shopping_cart);
  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart);
  update_tax_dom(total);
}

// 🤸‍♀️: DOM 수정
function update_shipping_icons(cart) {
  let buy_buttons = get_buy_buttons_dom();
  for (let i = 0; i < buy_buttons.length; i++) {
    let button = buy_buttons[i];
    let item = button.item;
    let hasFreeShipping = gets_free_shipping_with_item(cart, item);
    set_free_shipping_icon(button, hasFreeShipping);
  }
}

// 🧮: 암묵적 입력과 출력이 없음
function gets_free_shipping_with_item(cart, item) {
  let new_cart = add_item(cart, item);
  return gets_free_shipping(new_cart);
}

// 🧮: 암묵적 입력과 출력이 없음
function set_free_shipping_icon(button, isShown) {
  if (isShown) button.show_free_shipping_icon();
  else button.hide_free_shipping_icon();
}

// 🧮: 암묵적 입력과 출력이 없음
function update_tax_dom(total) {
  set_tax_dom(calc_tax(total));
}

// 🧮: 암묵적 입력과 출력이 없음
function add_element_last(array, elem) {
  let new_array = array.slice();
  new_array.push(elem);
  return new_array;
}

// 🧮: 암묵적 입력과 출력이 없음
function add_item(cart, item) {
  return add_element_last(cart, item);
}

// 🧮: 암묵적 입력과 출력이 없음
function make_cart_item(name, price) {
  return {
    name,
    price,
  };
}

// 🧮: 암묵적 입력과 출력이 없음
function calc_total(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    total += item.price;
  }
  return total;
}

// 🧮: 암묵적 입력과 출력이 없음
function gets_free_shipping(cart) {
  return calc_total(cart) >= 20;
}

// 🧮: 암묵적 입력과 출력이 없음
function calc_tax(amount) {
  return amount * 0.1;
}
