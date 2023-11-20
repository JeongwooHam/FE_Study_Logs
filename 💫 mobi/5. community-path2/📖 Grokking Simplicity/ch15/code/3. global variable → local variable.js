// [전역변수를 지역변수로 바꾸기]

/// 1. 지역변수로 바꿀 수 있는 전역변수를 찾는다.
function calc_cart_total() {
  total = 0; // total은 전역변수일 필요가 없음
  cost_ajax(cart, function (cost) {
    total += cost; // 콜백이 호출되기 전 다른 타임라인에서 값을 바꾸면 total 값이 0이 아닐 수도 있음
    shipping_ajax(cart, function (shipping) {
      total += shipping;
      update_total_dom(total);
    });
  });
}

/// 2. 찾은 전역변수를 지역변수로 바꾼다.
function calc_cart_total() {
  var total = 0; // 지역변수로 바꿨음
  cost_ajax(cart, function (cost) {
    total += cost;
    shipping_ajax(cart, function (shipping) {
      total += shipping;
      update_total_dom(total);
    });
  });
}

/*
👩‍🏫 이제 total을 읽고 쓰는 동작은 함수 밖에 영향을 주지 않습니다!
따라서 위의 함수는 더이상 액션이 아닙니다.
액션이 아닌 것은 타임라인에 표시하지 않으므로 타임라인이 많이 짧아지고, 더 단순해졌습니다.
*/
