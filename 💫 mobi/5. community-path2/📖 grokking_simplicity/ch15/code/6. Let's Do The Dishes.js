// [설거지 수행 코드 리팩토링하기]

var plates = ...;
var forks = ...;
var cups = ...;
var total = ...;

function doDishes() {
  total = 0;
  wash_ajax(plates, function() {
    total += plates.length;
    wash_ajax(forks, function() {
      total += forks.length;
      wash_ajax(cups, function() {
        total += cups.length;
        update_dishes_dom(total);
      });
    });
  });
}

doDishes();

// 👩‍🏫 수정 후 코드입니다.
// 전역 변수를 인자와 지역 변수로 바꿈으로써 암묵적인 입력과 출력이 없도록 했습니다.
// 또한 DOM을 업데이트하는 대신 콜백을 사용합니다.
var forks = ...;
var cups = ...;

function doDishes(plates, forks, cups, callback) {
  var total = 0;
  wash_ajax(plates, function() {
    total += plates.length;
    wash_ajax(forks, function() {
      total += forks.length;
      wash_ajax(cups, function() {
        total += cups.length;
        callback(total);
      });
    });
  });
}

doDishes(plates, forks, cups, update_dishes_dom);