/// BEFORE
/*
👩‍🏫 현재 큐에서는 작업이 끝나야 다음 작업이 시작됩니다.
새로운 작업이 들어오면 이전 작업을 건너뛸 수 있도록 Dropping 큐를 만들어 봅시다.
*/
function Queue(worker) {
  var queue_items = [];
  var working = false;

  function runNext() {
    if (working) return;
    if (queue_items.length === 0) return;
    working = true;
    var item = queue_items.shift();
    worker(item.data, function (val) {
      working = false;
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

function calc_cart_worker(cart, done) {
  calc_cart_total(cart, function (total) {
    update_total_dom(total);
    done(total);
  });
}

var update_total_queue = Queue(calc_cart_worker);

/// 📢 AFTER: Dropping Queue
// max: 보관할 수 있는 최대 큐 크기
function DroppingQueue(max, worker) {
  var queue_items = [];
  var working = false;

  function runNext() {
    if (working) return;
    if (queue_items.length === 0) return;
    working = true;
    var item = queue_items.shift();
    worker(item.data, function (val) {
      working = false;
      setTimeout(item.callback, 0, val);
      runNext();
    });
  }

  return function (data, callback) {
    queue_items.push({
      data: data,
      callback: callback || function () {},
    });
    // 큐에 추가한 후에 항목이 max를 넘는 경우 모두 버림
    while (queue_items.length > max) queue_items.shift();
    setTimeout(runNext, 0);
  };
}

function calc_cart_worker(cart, done) {
  calc_cart_total(cart, function (total) {
    update_total_dom(total);
    done(total);
  });
}
// max = 1, 한 개 이상은 모두 버림
var update_total_queue = DroppingQueue(1, calc_cart_worker);
/*
👩‍🏫 현재 코드에서는 아무리 항목을 빨리 추가해도 큐 항목이 한 개 이상 늘어나지 않습니다.
사용자는 서버 응답을 최대 두 번만 기다리면 됩니다.
*/
