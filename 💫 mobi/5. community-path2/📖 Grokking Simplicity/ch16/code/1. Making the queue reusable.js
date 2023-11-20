// BEFORE
function Queue() {
  var queue_items = [];
  var working = false;

  function runNext() {
    if (working) return;
    if (queue_items.length === 0) return;
    working = true;
    var cart = queue_items.shift();
    calc_cart_total(cart, function (total) {
      update_total_dom(total);
      working = false;
      runNext();
    });
  }

  return function (cart) {
    queue_items.push(cart);
    setTimeout(runNext, 0);
  };
}

var update_total_queue = Queue();
// ➡️ 장바구니에 제품을 추가하는 기능에 특화된 함수

/// 1️⃣ done() 함수 빼내기
/*
👩‍🏫 큐를 반복해서 처리하는 코드와 큐에서 하는 일을 분리해봅시다.
함수 본문을 콜백으로 바꾸는 리팩토링을 사용할 수 있습니다.
*/
function Queue() {
  var queue_items = [];
  var working = false;

  function runNext() {
    if (working) return;
    if (queue_items.length === 0) return;
    working = true;
    var cart = queue_items.shift();
    // cart: 원래 cart 대신 인자로 cart를 받아 지역적으로 사용함
    // done: 콜백함수명
    // 의존하고 있는 것이 없는 상태!
    function worker(cart, done) {
      calc_cart_total(cart, function (total) {
        update_total_dom(total);
        done(total);
      });
    }
    worker(cart, function () {
      // 새로운 함수로 빼낸 부분
      working = false;
      runNext();
    });
  }

  return function (cart) {
    queue_items.push(cart);
    setTimeout(runNext, 0);
  };
}

var update_total_queue = Queue();
// ➡️ done() 콜백으로 큐 타임라인 작업을 이어서 할 수 있다.

// 2️⃣ worker의 행동을 바꿀 수 있도록 밖으로 빼내기
/*
👩‍🏫 아직 큐는 장바구니에 제품을 추가하는 일만 할 수 있습니다.
일반적인 큐를 만들어 많은 동작에 재사용하도록 수정해봅시다.
- 함수를 인자로 빼는 리팩토링을 통해 특정한 행동을 하는 코드를 없애기
- 큐가 생성될 때 원하는 행동 전달하기
*/
// worker: 실행할 함수를 새로운 인자로 추가
function Queue(worker) {
  var queue_items = [];
  var working = false;

  function runNext() {
    if (working) return;
    if (queue_items.length === 0) return;
    working = true;
    var cart = queue_items.shift();
    worker(cart, function () {
      working = false;
      runNext();
    });
  }

  return function (cart) {
    queue_items.push(cart);
    setTimeout(runNext, 0);
  };
}

function calc_cart_worker(cart, done) {
  calc_cart_total(cart, function (total) {
    update_total_dom(total);
    done(total);
  });
}

var update_total_queue = Queue(calc_cart_worker);
// ➡️ 일반적인 큐 함수 생성! Queue() 내부에서는 일반적인 기능을 하며, 원하는 동작은 인자로 넘길 수 있다.

/// 3️⃣ 작업이 끝났을 때 실행하는 콜백을 받기
/*
👩‍🏫 작업 데이터와 콜백을 작은 객체로 만들어 큐에 넣어줌으로써 추가 정보를 전달할 수 있습니다.
*/
function Queue(worker) {
  var queue_items = [];
  var working = false;

  function runNext() {
    if (working) return;
    if (queue_items.length === 0) return;
    working = true;
    var item = queue_items.shift();
    // worker에는 데이터만 전달함
    worker(item.data, function () {
      working = false;
      runNext();
    });
  }

  return function (data, callback) {
    // 배열에 데이터와 콜백을 모두 넣어줌
    queue_items.push({
      data: data,
      // 콜백이 없는 경우 아무것도 하지 않는 함수 사용
      // 함수에 두 번째 인자를 전달하지 않으면 callback 값은 undefined가 될 수 있음
      // 하지만 콜백은 항상 실행해야 하므로 undefined인 경우 아무것도 하지 않는 함수가 실행되도록 하였음
      callback: callback || function () {},
    });
    setTimeout(runNext, 0);
  };
}

function calc_cart_worker(cart, done) {
  calc_cart_total(cart, function (total) {
    update_total_dom(total);
    done(total);
  });
}

var update_total_queue = Queue(calc_cart_worker);
// ➡️ 작업이 끝났을 때 실행되는 콜백이 데이터와 함께 저장됨. 하지만 아직 콜백이 사용되진 않았음

// 4️⃣ 작업이 완료되었을 때 콜백 부르기
function Queue(worker) {
  var queue_items = [];
  var working = false;

  function runNext() {
    if (working) return;
    if (queue_items.length === 0) return;
    working = true;
    var item = queue_items.shift();
    // done이 인자를 받을 수 있게 만듦
    worker(item.data, function (val) {
      working = false;
      // 콜백에 인자 전달
      // item.callback을 setTimeOut을 사용해 비동기로 호출
      setTimeout(item.callback, 0, val);
      runNext();
    });
  }

  return function (data, callback) {
    queue_items.push({
      data: data,
      callback: callback || function () {},
    });
    setTimeout(runNext, 0);
  };
}
// cart: 제품 데이터
// done: 완료될 때 부르는 함수
function calc_cart_worker(cart, done) {
  // 위에서 val을 사용할 때와 달리 어떤 값이 사용되는지 알기 때문에 구체적인 이름 사용
  calc_cart_total(cart, function (total) {
    update_total_dom(total);
    done(total);
  });
}

var update_total_queue = Queue(calc_cart_worker);
// ➡️ 큐를 거치는 모든 작업을 처리하고 작업 완료 시 타임라인이 이어서 작업을 계속하는 재사용 가능한 큐 함수 생성
