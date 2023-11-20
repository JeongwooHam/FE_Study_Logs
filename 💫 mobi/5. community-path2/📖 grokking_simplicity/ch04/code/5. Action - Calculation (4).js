// Page 80 It's your turn

function update_shipping_icons() {
  let buy_buttons = get_buy_buttons_dom();
  for (let i = 0; i < buy_buttons.length; i++) {
    let button = buy_buttons[i];
    let item = button.item;
    if (item.price + shopping_cart_total >= 20)
      button.show_free_shipping_icon();
    else button.hide_free_shipping_icon();
  }
}

/*
[My Answer]
function update_shipping_icons() {
  let buy_buttons = get_buy_buttons_dom();
  for (let i = 0; i < buy_buttons.length; i++) {
    let button = buy_buttons[i];
    let item = button.item;
    decide_target(item.price, shoppnig_cart_total) ? button.show_free_shipping_icon() : button.hide_free_shipping_icon()
  }
}

const decide_target = (new, past_total) => {
  return new + past_total >= 20 ? true : false >> 이미 >= 로 참 거짓 판명되므로 굳이 삼항연산자 사용할 필요 X!
}
*/

// Page 81 Answer

/// Extracted

function update_shipping_icons() {
  let buy_buttons = get_buy_buttons_dom();
  for (let i = 0; i < buy_buttons.length; i++) {
    let button = buy_buttons[i];
    let item = button.item;
    if (gets_free_shipping(item.price)) button.show_free_shipping_icon();
    else button.hide_free_shipping_icon();
  }
}

function gets_free_shipping(item_price) {
  return item_price + shopping_cart_total >= 20;
}
