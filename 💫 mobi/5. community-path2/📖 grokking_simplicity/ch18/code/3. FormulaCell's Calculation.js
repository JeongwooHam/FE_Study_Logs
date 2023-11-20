// [FormulaCell은 파생된 값을 계산한다.]

function FormulaCell(upstreamCell, f) {
  var myCell = ValueCell(f(upstreamCell.val())); // ValueCell 재사용
  // 셀 값 재계산을 위해 감시자 추가
  upstreamCell.addWatcher(function (newUpstreamValue) {
    myCell.update(function (currentValue) {
      return f(newUpstreamValue);
    });
  });
  // val과 addWatcher를 myCell에 위임
  return {
    val: myCell.val,
    addWatcher: myCell.addWatcher, // formulaCell 값은 직접 변경 불가
  };
}

/*
👩‍🏫 FormulaCell의 값은 직접 바꿀 수 없습니다!
- 감시하던 상위 셀 값이 바뀌면, 상위 값을 가지고 셀 값을 다시 계산하고, 값이 바뀐다.
- FormulaCell의 값을 직접 바꿀 수는 없지만 감시할 수는 있으므로 특정 값이 바뀔 때 실행할 액션을 추가할 수 있다.
*/

/// Before

var shopping_cart = ValueCell({});

function add_item_to_cart(name, price) {
  var item = make_cart_item(name, price);
  shopping_cart.update(function (cart) {
    return add_item(cart, item);
  });
  var total = calc_total(shopping_cart.val());
  set_cart_total_dom(total);
  update_tax_dom(total);
}

shopping_cart.addWatcher(update_shipping_icons);

/// After

var shopping_cart = ValueCell({});
// shopping_cart가 바뀌면 cart_total도 바뀜
var cart_total = FormulaCell(shopping_cart, calc_total);

// 클릭 핸들러가 더 간단해짐 > 할 일을 명확히 할 수 있음
function add_item_to_cart(name, price) {
  var item = make_cart_item(name, price);
  shopping_cart.update(function (cart) {
    return add_item(cart, item);
  });
}

// 장바구니가 바뀔 때 변경되는 DOM 3개 분리
shopping_cart.addWatcher(update_shipping_icons);
// cart_total이 바뀌면 DOM이 업데이트 됨
cart_total.addWatcher(set_cart_total_dom);
cart_total.addWatcher(update_tax_dom);
