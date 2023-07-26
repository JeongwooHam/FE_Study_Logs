// Page 91 It's your turn

function add_item_to_cart(name, price) {
  shopping_cart = add_item(shopping_cart, name, price);
  calc_cart_total();
}

function calc_cart_total() {
  shopping_cart_total = calc_total(shopping_cart);
  set_cart_total_dom();
  update_shipping_icons(shopping_cart);
  update_tax_dom();
}

function set_cart_total_dom() {
  // ...
  shopping_cart_total;
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

function update_tax_dom() {
  set_tax_dom(calc_tax(shopping_cart_total));
}

// Page 92 Answer

/// Eliminating reads to globals

function add_item_to_cart(name, price) {
  shopping_cart = add_item(shopping_cart, name, price);
  calc_cart_total(shopping_cart);
}

function calc_cart_total(cart) {
  let total = calc_total(cart);
  set_cart_total_dom(total);
  update_shipping_icons(cart);
  update_tax_dom(total);
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

function update_tax_dom(total) {
  set_tax_dom(calc_tax(total));
}
