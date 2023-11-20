// 🕰️ [시계 할인 마케팅을 구현하지 위한 두 가지 방법]

// 🙅‍♀️ 마케팅에서 사용해야 하므로 추상화 벽 아래에는 구현 불가!

/// Choice 1: 추상화 벽에 만들기
// 장점: 해시 맵 데이터 구조로 되어 있는 장바구니에 접근할 수 있음
// 단점_1: 같은 계층에 있는 함수를 사용할 수 없음, 시스템 하위 계층 코드가 늘어남
// 단점_2: 시스템 하위 계층 코드가 늘어남
// 단점_3: 마케팅 - 개발 간 맞춰야 하는 규약이 하나 더 늘어나므로 코드 이해에 시간 요함

function getsWatchDiscount(cart) {
  let total = 0;
  let names = Object.keys(cart);
  for (let i = 0; i < names.length; i++) {
    let item = cart[names[i]];
    total += item.price;
  }
  return total > 100 && cart.hasOwnProperty("watch");
}

/// Choice 2: 추상화 벽 위에 만들기
// 장점: 더 직접 구현에 가까움, 반복문 같은 구체적 구현에 신경쓰지 않을 수 있음
// 단점: 해시 데이터 구조에 직접 접근할 수 없음 (추상화 벽에 있는 함수를 사용해 접근해야 함)

function getsWatchDiscount(cart) {
  let total = calcTotal(cart);
  let hasWatch = isInCart("watch");
  return total > 100 && hasWatch;
}

// ========================================================================================

// 📑 [장바구니에 제품 추가 시 로그 남기기]
// Page 214

function add_item(cart, item) {
  // action이 됨
  logAddToCart(global_user_id, item); // action
  return objectSet(cart, item.name, item);
}

// 🤔 좋은 위치일까?
// update 함수는 장바구니에 제품을 담는 행위가 없어도 add_item() 호출
// 제품이 표시될 때마다 불리므로 제품을 추가한 것처럼 보이게 됨. 여기서 사용하면 안 된다!
// 즉, logAddToCart는 추상화 벽 위의 계층에서 호출하는 것이 좋음
function update_shipping_icons(cart) {
  let buttons = get_buy_buttons_dom();
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    let item = button.item;
    // 사용자가 장바구니에 제품을 추가하지 않아도 호출됨
    let new_cart = add_item(cart, item); // action이 됨
    if (gets_free_shipping(new_cart)) button.show_free_shipping_icon();
    else button.hide_free_shipping_icon();
  }
}

// 🌟 장바구니 로그를 남길 더 좋은 위치
// add_item_to_cart: 장바구니에 제품을 담을 때 호출되는 클릭 핸들러 함수
// 호출 의도를 명확히 반영하고, 이미 action!
function add_item_to_cart(name, price) {
  let item = make_cart_item(name, price);
  shopping_cart = add_item(shopping_cart, item);
  let total = calc_total(shopping_cart);
  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart);
  update_tax_dom(total);
  logAddToCart();
}
