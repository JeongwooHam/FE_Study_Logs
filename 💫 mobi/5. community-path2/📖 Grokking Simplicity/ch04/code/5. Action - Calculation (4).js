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
