// 🤖 Before Modification

function add_item_to_cart(name, price) {
  // 생성자 함수를 새로 만들어줬으므로, 인자로는 cart와 item이 와야 함
  shopping_cart = add_item(shopping_cart, name, price);
  let total = calc_total(shopping_cart);
  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart);
  update_tax_dom(total);
}

// ====================================================================

// 🤖 After Modification
function add_item_to_cart(name, price) {
  // 생성자 함수로 새로운 item 생성
  let item = make_cart_item(name, price);
  // 해당 item을 인자로 넘겨줌
  shopping_cart = add_item(shopping_cart, item);
  let total = calc_total(shopping_cart);
  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart);
  update_tax_dom(total);
}
