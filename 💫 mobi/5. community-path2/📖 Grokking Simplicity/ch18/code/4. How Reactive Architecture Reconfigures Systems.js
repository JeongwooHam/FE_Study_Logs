// 👩‍🏫 반응형 아키텍처가 시스템을 어떻게 바꿨을까요?

/// Typical architecture

var shopping_cart = {};

// 핸들러에 모든 액션 시퀀스가 있음
// 💡 제품 추가 버튼 클릭 시의 액션 시퀀스
function add_item_to_cart(name, price) {
  var item = make_cart_item(name, price);
  // 전역 장바구니에 제품 추가
  shopping_cart = add_item(shopping_cart, item);
  // 합계 계산
  var total = calc_total(shopping_cart);
  // 합계 DOM 업데이트
  set_cart_total_dom(total);
  // 배송 아이콘 업데이트
  update_shipping_icons(shopping_cart);
  // 세금 DOM 업데이트
  update_tax_dom(total);
}

/// Reactive architecture

var shopping_cart = ValueCell({});
var cart_total = FormulaCell(shopping_cart, calc_total);

// 제품 추가 버튼 클릭 ➡️ 전역 장바구니에 제품을 추가하는 직접적인 액션만 핸들러 안에 담김
function add_item_to_cart(name, price) {
  var item = make_cart_item(name, price);
  shopping_cart.update(function (cart) {
    return add_item(cart, item);
  });
}

// 하위(downstream) 액션: 합계 계산, 배송 아이콘 업데이트, 합계/세금 DOM 업데이트
// 하위 액션은 핸들러 바깥에 위치
shopping_cart.addWatcher(update_shipping_icons);
cart_total.addWatcher(set_cart_total_dom);
cart_total.addWatcher(update_tax_dom);
