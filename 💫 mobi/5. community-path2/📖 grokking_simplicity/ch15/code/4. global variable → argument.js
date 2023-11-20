/// [전역변수를 인자로 바꾸기]
// cart 전역변수 암묵적 입력을 없애 타임라인이 공유하는 자원을 한 번에 없앨 수 있다.

// 1. 암묵적 인자 확인하기
function add_item_to_cart(name, price, quantity) {
  cart = add_item(cart, name, price, quantity);
  calc_cart_total();
}

function calc_cart_total() {
  var total = 0;
  // ==============================================
  // 이 사이에 cart 값이 바뀌면 다른 cart 값이 된다.
  cost_ajax(cart, function (cost) {
    total += cost;
    // =============================================
    shipping_ajax(cart, function (shipping) {
      total += shipping;
      update_total_dom(total);
    });
  });
}

/// 2. 암묵적 입력을 인자로 바꾸기
function add_item_to_cart(name, price, quantity) {
  cart = add_item(cart, name, price, quantity);
  // cart를 인자로 추가한다.
  calc_cart_total(cart);
}

function calc_cart_total(cart) {
  var total = 0;
  // 더이상 전역변수를 읽지 않는다.
  cost_ajax(cart, function (cost) {
    total += cost;
    shipping_ajax(cart, function (shipping) {
      total += shipping;
      update_total_dom(total);
    });
  });
}

/*
👩‍🏫 이제 첫 번째 단계의 cart 값이 다른 타임라인에 영향을 주지 않게 되었습니다.


🤔 calc_cart_total()의 전역변수가 모두 사라졌는데, 이제 이 함수는 계산인가요?
👩‍🏫 아닙니다. 
   서버에 두 개 접근 하는 액션과 DOM을 업데이트하는 액션을 여전히 수행하고 있으므로 액션입니다.
   하지만 전역변수를 읽고 쓰지 않으므로 계산에 가까워졌습니다.
   이를 통해 실행 시점에 덜 의존하게 되었습니다.
*/
