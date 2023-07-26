// Before Modification
function gets_free_shipping(total, item_price) {
  return item_price + total >= 20;
}

function calc_total(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    total += item.price;
  }
  return total;
}

// ====================================================================

// After Modification
// cart라는 인자를 받도록 수정 (장바구니가 무료인지 알려줌)
function gets_free_shipping(cart) {
  // calc_total 함수를 재사용하여 중복 제거
  return calc_total(cart) >= 20;
}

// Original
function update_shipping_icons() {
  let buttons = get_buy_buttons_dom();
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    let item = button.item;
    // 원래는 제품의 합계와 추가할 상품의 가격을 직접 인자로 보내줬었음
    if (gets_free_shipping(shopping_cart_total, item.price))
      button.show_free_shipping_icon();
    else button.hide_free_shipping_icon();
  }
}

// With new signature
function update_shipping_icons() {
  let buttons = get_buy_buttons_dom();
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    let item = button.item;
    // 추가할 상품이 들어있는 새로운 장바구니 생성
    let new_cart = add_item(shopping_cart, item.name, item.price);
    // 장바구니의 무료 배송 여부를 return하게 됨
    if (gets_free_shipping(new_cart)) button.show_free_shipping_icon();
    else button.hide_free_shipping_icon();
  }
}
