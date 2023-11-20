// [셀은 일급 상태입니다]
/*
ValueCell
- 반응형 아키텍처로 만든 스프레드시트
- 스프레드시트에서는, 어떤 셀의 값이 바뀔 경우 스프레드시트 함수가 다시 계산한다.
*/

/*
👩‍🏫 
장바구니는 전역 변수이고, 할당 연산자로 값이 바뀌므로 언제 바뀔 지 알기 어렵습니다.
상태를 일급 함수로 만들고, 전역 변수를 몇 가지 동작과 함께 객체로 만들어봅시다.
*/
function ValueCell(initialValue) {
  var currentValue = initialValue; // 변경 불가능한 값
  return {
    // 동작 1. 값을 읽는다.
    val: function () {
      return currentValue; // 현재 값을 가져옴
    },
    // 동작 2. 현재 값을 바꾼다.
    // 현재 값에 함수를 적용해 값을 바꾸는 교체 패턴
    update: function (f) {
      var oldValue = currentValue;
      var newValue = f(oldValue);
      currentValue = newValue;
    },
  };
}

/// Before
var shopping_cart = {};

function add_item_to_cart(name, price) {
  var item = make_cart_item(name, price);
  // 읽고 바꾸고 쓰는 패턴
  shopping_cart = add_item(shopping_cart, item);
  var total = calc_total(shopping_cart);
  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart);
  update_tax_dom(total);
}

/// After

var shopping_cart = ValueCell({});

function add_item_to_cart(name, price) {
  var item = make_cart_item(name, price);
  // 값을 변경하기 위해 값을 직접 사용하지 않고 메서드를 호출한다.
  shopping_cart.update(function (cart) {
    return add_item(cart, item);
  });
  var total = calc_total(shopping_cart.val()); // 값을 읽는 코드
  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart.val()); // 값을 읽는 코드
  update_tax_dom(total);
}
