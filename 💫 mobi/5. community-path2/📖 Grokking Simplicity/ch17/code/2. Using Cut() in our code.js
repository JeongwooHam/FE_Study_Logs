// 코드에 Cut() 적용하기
/*
[고민해야 할 것]
1. Cut()을 보관할 범위
  - 응답 콜백 끝에서 호출해야 한다.
  - 두 응답 콜백을 만드는 함수 범위에 넣을 것!

2. Cut()에 넣을 콜백
  - calc_cart_total()에는 이미 total 값 계산이 끝나고 호출하는 콜백이 존재한다.
  - 실제로 실행되는 함수가 무엇인지는 상관 없다.
  - Cut() 콜백에서 calc_cart_total() 콜백을 호출할 것!
*/

/// Before
function calc_cart_total(cart, callback) {
  var total = 0;
  cost_ajax(cart, function (cost) {
    total += cost;
  });
  shipping_ajax(cart, function (shipping) {
    total += shipping;
    callback(total);
  });
}

/// With Cut()

function calc_cart_total(cart, callback) {
  var total = 0;
  // done()이 두 번 호출될 때까지 타임라인은 실행하지 않는다.
  var done = Cut(2, function () {
    callback(total);
  });
  // cost_ajax() 콜백
  cost_ajax(cart, function (cost) {
    total += cost;
    done();
  });
  // shipping_ajax() 콜백
  shipping_ajax(cart, function (shipping) {
    total += shipping;
    done(); // 두 타임라인 모두 done()을 호출한다.
  });
}
