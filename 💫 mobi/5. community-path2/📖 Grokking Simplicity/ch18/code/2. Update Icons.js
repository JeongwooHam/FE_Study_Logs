// [셀이 바뀔 때 배송 아이콘 갱신하기]
// ValueCell에 감시자 기능을 추가하고 셀이 바뀔 때마다 등록된 모든 감시자가 실행되게 했다.

/// Before

var shopping_cart = ValueCell({});

function add_item_to_cart(name, price) {
  var item = make_cart_item(name, price);
  shopping_cart.update(function (cart) {
    return add_item(cart, item);
  });
  var total = calc_total(shopping_cart.val());
  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart.val());
  update_tax_dom(total);
}

/// After

var shopping_cart = ValueCell({});

function add_item_to_cart(name, price) {
  var item = make_cart_item(name, price);
  shopping_cart.update(function (cart) {
    return add_item(cart, item);
  });
  var total = calc_total(shopping_cart.val());
  set_cart_total_dom(total);
  // update_shipping_icons(shopping_cart.val()); > 이 부분에서 진행되는 액션을 삭제하여 이벤트핸들러가 간단해짐
  update_tax_dom(total);
}
// 이 코드를 통해 장바구니가 바뀔 때마다 실행되게 할 수 있음
shopping_cart.addWatcher(update_shipping_icons);

/*
👩‍🏫 어떻게 변경됐을까요?
1️⃣ 핸들러 함수가 더 작아짐
  - 원래 하던 것보다 적은 일을 함
2️⃣ 아이콘 갱신을 직접 하지 않게 됨
  - 감시자가 해당 역할을 하게 됨
3️⃣ 매번 아이콘을 업데이트하는 함수를 호출하지 않아도 됨
  - 장바구니가 변경될 때마다 실행됨
➡️ 이를 통해 배송 아이콘은 항상 최신 장바구니 상태를 반영한다.
*/
