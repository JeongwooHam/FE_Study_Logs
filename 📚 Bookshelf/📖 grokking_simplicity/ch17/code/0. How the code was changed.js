/*
⚠️ 아직 버그가 남아있다!

- 어쩔때는 제대로 동작하기 때문에 재현할 수 없다.
- 가끔은 잘 동작하는 타이밍 버그에 해당한다.
*/

// 🤔 무엇이 바뀐걸까?

/// 최적화하기 전 (동작함)
function add_item_to_cart(item) {
  cart = add_item(cart, item);
  update_total_queue(cart);
}

function calc_cart_total(cart, callback) {
  var total = 0;
  cost_ajax(cart, function (cost) {
    // 지역변수인 total에 같은 타임라인에서 접근하므로 액션이 아님
    total += cost;
    // shipping_ajax()가 cost_ajax() 콜백 안에서 호출됨
    shipping_ajax(cart, function (shipping) {
      total += shipping;
      callback(total);
    });
  });
}

function calc_cart_worker(cart, done) {
  calc_cart_total(cart, function (total) {
    update_total_dom(total);
    done(total);
  });
}

var update_total_queue = DroppingQueue(1, calc_cart_worker);

/// 최적화한 후 (동작하지 않음)

// 클릭 핸들러
// 1️⃣ (1-4) 동기적으로 실행되므로 타임라인 하나에 그려짐
function add_item_to_cart(item) {
  // 1. 카트 읽기, 2. 카트 쓰기
  cart = add_item(cart, item);
  // 작업을 큐에 추가하는 액션
  // 3. 카트 읽기, 4. update_total_queue() 부르기
  update_total_queue(cart);
}

function calc_cart_total(cart, callback) {
  // 2️⃣ (5-7) 큐에서 실행되는 부분이므로 새로운 타임라인으로 그림
  // 5. total 초기화
  var total = 0;
  // 6. cost_ajax() 호출
  cost_ajax(cart, function (cost) {
    // total은 지역변수이고 액션에 포함되어 있음
    // +=: 읽고 / 쓰는 연산자
    // 3️⃣ (8-9) ajax 콜백에서 실행되는 부분이므로 새로운 타임라인에 그림
    // 8. total 읽기, 9. total 쓰기
    total += cost;
  });
  // shipping_ajax()가 cost_ajax() 다음에 바로 실행됨
  // 📢 거의 동시에 두 ajax 요청이 실행되므로 빠르지만 버그가 존재한다!
  // 2️⃣ cart_ajax() 바로 다음에 호출되므로 같은 타임라인에 그려짐
  // 7. shipping_ajax() 호출
  shipping_ajax(cart, function (shipping) {
    // total을 여러 타임라인에서 사용하게 됨
    // 4️⃣ (10-13) ajax 콜백에서 실행되므로 새로운 타임라인에 그림
    // 10. total 읽기, 11. total 쓰기
    total += shipping;
    // 12. total 읽기, 13. update_total_dom() 호출하기
    callback(total);
  });
}

function calc_cart_worker(cart, done) {
  calc_cart_total(cart, function (total) {
    // 4️⃣ shipping_ajax() 콜백에서 실행되므로 같은 타임라인에 위치
    update_total_dom(total);
    done(total);
  });
}

var update_total_queue = DroppingQueue(1, calc_cart_worker);
