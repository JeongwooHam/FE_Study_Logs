/// BEFORE
function add_item_to_cart(item) {
  cart = add_item(cart, item);
  calc_cart_total(cart, update_total_dom);
}
// 모든 비동기 작업은 calc_cart_total() 내에서 일어난다.
function calc_cart_total(cart, callback) {
  var total = 0;
  // 순서가 끼어들 수 있는 액션 전에 큐 관련 작업을 하는 것이 좋다.
  cost_ajax(cart, function (cost) {
    total += cost;
    shipping_ajax(cart, function (shipping) {
      total += shipping;
      callback(total);
    });
  });
}
// ➡️ 모든 코드가 타임라인 하나에 있어 큐에서 처리할 작업을 다른 타임라인으로 옮겨야 한다.

/// 1️⃣ 큐에서 처리할 작업을 큐에 넣기
function add_item_to_cart(item) {
  cart = add_item(cart, item);
  // 클릭 핸들러에서 큐에 항목을 추가한다.
  update_total_queue(cart);
}

function calc_cart_total(cart, callback) {
  var total = 0;
  cost_ajax(cart, function (cost) {
    total += cost;
    shipping_ajax(cart, function (shipping) {
      total += shipping;
      callback(total);
    });
  });
}

var queue_items = [];

// 큐에 추가하는 일 외에 다른 역할을 하는 함수 (미완)
function update_total_queue(cart) {
  queue_items.push(cart);
}
// ➡️ 큐에 항목을 추가하는 것은 배열 끝에 항목을 추가하는 간단한 코드!

// 2️⃣ 큐에 있는 첫 번째 항목 실행하기
/*
👩‍🏫 큐 끝에 항목을 넣었으므로 작업을 시작할 수 있게 되었습니다.
작업을 실행하려면 큐 가장 앞에 있는 항목을 꺼내 작업을 시작하면 됩니다.
*/
function add_item_to_cart(item) {
  cart = add_item(cart, item);
  update_total_queue(cart);
}

function calc_cart_total(cart, callback) {
  var total = 0;
  cost_ajax(cart, function (cost) {
    total += cost;
    shipping_ajax(cart, function (shipping) {
      total += shipping;
      callback(total);
    });
  });
}

var queue_items = [];

// 배열의 첫 번째 항목을 꺼내 cart에 넣어주는 함수
function runNext() {
  var cart = queue_items.shift();
  calc_cart_total(cart, update_total_dom);
}

// 큐에 항목을 추가하고 워커를 시작하는 함수
function update_total_queue(cart) {
  queue_items.push(cart);
  // setTimeOut은 JS 이벤트 루프에 작업을 추가한다.
  setTimeout(runNext, 0);
}
// ➡️ 현재는 동시에 두 항목이 처리되는 것을 막는 코드는 없는 상태 (아직 두 DOM 업데이트의 순서가 섞일 수 있는 문제가 남아있음)

// 3️⃣ 두 번째 타임라인이 첫 번째 타임라인과 동시에 실행되는 것을 막기
// 👩‍🏫 이미 실행되는 작업이 있는지 확인해서 두 타임라인이 섞이지 않도록 만들어 봅시다.
function add_item_to_cart(item) {
  cart = add_item(cart, item);
  update_total_queue(cart);
}

function calc_cart_total(cart, callback) {
  var total = 0;
  cost_ajax(cart, function (cost) {
    total += cost;
    shipping_ajax(cart, function (shipping) {
      total += shipping;
      callback(total);
    });
  });
}

var queue_items = [];
// 현재 동작하고 있는 다른 작업이 있는지 확인하는 역할
var working = false;

function runNext() {
  // 동시에 두 개의 작업이 동작하는 것을 막아준다.
  if (working) return;
  working = true;
  var cart = queue_items.shift();
  calc_cart_total(cart, update_total_dom);
}

function update_total_queue(cart) {
  queue_items.push(cart);
  setTimeout(runNext, 0);
}
// ➡️ 두 타임라인이 동시에 실행되는 것을 막았지만 장바구니에 추가된 작업이 항상 하나만 실행되는 상태 (다음 동작이 영원히 실행되지 않음)

// 4️⃣ 다음 작업을 시작할 수 있도록 콜백 함수 수정하기
// 👩‍🏫 새로운 콜백을 전달해 현재 작업이 끝났을 때 다음 작업을 실행할 수 있도록 고쳐봅시다.
var queue_items = [];
var working = false;

function runNext() {
  if (working) return;
  working = true;
  var cart = queue_items.shift();
  //                     작업 완료를 표시하고 다음 작업을 시작함
  calc_cart_total(cart, (total) => {
    update_total_dom(total);
    working = false;
    runNext();
  });
}

function update_total_queue(cart) {
  queue_items.push(cart);
  setTimeout(runNext, 0);
}
// ➡️ 비동기로 작업을 이어서 할 수 있는 반복 구조 생성 (배열에 있는 모든 항목 반복 가능)
// ⚠️ 하지만 현재는 배열이 비었을 때 멈추지 않습니다.

// 5️⃣ 항목이 없을 때 멈추게 하기
/*
👩‍🏫 큐 워커는 기본적으로 큐가 바닥날 때까지 실행합니다.
빈 큐에서 콜백 호출 시 undefined가 나오는데, 이 값은 장바구니 항목으로 사용되면 안 됩니다.
*/
var queue_items = [];
var working = false;

function runNext() {
  if (working) return;
  // 큐가 비었을 때 멈춘다.
  if (queue_items.length === 0) return;
  working = true;
  var cart = queue_items.shift();
  calc_cart_total(cart, function (total) {
    update_total_dom(total);
    working = false;
    runNext();
  });
}

function update_total_queue(cart) {
  queue_items.push(cart);
  setTimeout(runNext, 0);
}
// ➡️ 사용자가 아무리 많이 빠르게 클릭해도 순서대로 처리할 수 있는 큐 생성
// ⚠️ 하지만 큐 코드에 전역변수 두 개가 남아 있습니다.

// 6️⃣ 변수와 함수를 함수 범위로 넣기
// 👩‍🏫 Queue() 함수에 전역변수와 사용하는 함수를 넣어 다른 곳에서 접근할 수 없게 만들어 봅시다.
function Queue() {
  // 모든 코드를 Queue() 함수에 담아줌
  // 전역변수가 Queue()의 지역변수로 바뀜
  var queue_items = [];
  var working = false;

  function runNext() {
    if (working) return;
    if (queue_items.length === 0) return;
    working = true;
    var cart = queue_items.shift();
    calc_cart_total(cart, (total) => {
      update_total_dom(total);
      working = false;
      runNext();
    });
  }

  // 사용자는 이 값만 필요하므로 Queue()의 리턴값을 변수에 할당하여 사용한다.
  // Queue()는 큐에 항목을 넣을 수 있는 함수를 반환함
  return function (cart) {
    queue_items.push(cart);
    setTimeout(runNext, 0);
  };
}
// 리턴된 함수를 원래 함수처럼 쓸 수 있다.
var update_total_queue = Queue();
