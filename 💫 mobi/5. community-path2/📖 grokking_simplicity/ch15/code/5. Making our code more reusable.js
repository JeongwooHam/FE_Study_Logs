/// [재사용하기 더 좋은 코드로 만들기]
// DOM을 업데이트하는 대신 total 값을 다른 계산에서 사용할 수 있도록 숫자로 받아쓰게 수정해보자.

// 🤖 BEFORE
// 현재는 두 개의 비동기 호출이 끝나야 값을 줄 수 있기 때문에 total을 값으로 리턴할 수 없다.
// DOM을 바꾸는 것은 암묵적인 출력이다.
// 하지만 비동기 콜백이 완료되기 전까지 리턴값으로 전달할 수 없다.
function calc_cart_total(cart) {
  var total = 0;
  cost_ajax(cart, function (cost) {
    total += cost;
    shipping_ajax(cart, function (shipping) {
      total += shipping;
      // 원래는 total을 인자로 전달
      update_total_dom(total);
    });
  });
}

function add_item_to_cart(name, price, quant) {
  cart = add_item(cart, name, price, quant);
  calc_cart_total(cart);
}

// 👩‍🏫 비동기 호출을 사용한다면 출력을 콜백으로 바꿀 수 있습니다.

/// 🤖 AFTER: 함수 본문을 콜백으로 바꾸기
/*
[함수 본문을 콜백으로 바꾸는 단계]
1. 본문의 앞부분과 뒷부분을 확인한다.
2. 함수로 빼낸다. > 이미 별도의 함수이므로 PASS
3. 콜백으로 빼낸다.
*/

// callback 인자로 변경
function calc_cart_total(cart, callback) {
  var total = 0;
  cost_ajax(cart, function (cost) {
    total += cost;
    shipping_ajax(cart, function (shipping) {
      total += shipping;
      // callback으로 변경
      callback(total);
    });
  });
}

function add_item_to_cart(name, price, quant) {
  cart = add_item(cart, name, price, quant);
  // update_total_dom을 콜백으로 전달함
  calc_cart_total(cart, update_total_dom);
}
