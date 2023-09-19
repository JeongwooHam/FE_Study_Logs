// [ValueCell을 반응형으로 만들기]

/// Original
function ValueCell(initialValue) {
  var currentValue = initialValue;
  return {
    val: function () {
      return currentValue;
    },
    update: function (f) {
      var oldValue = currentValue;
      var newValue = f(oldValue);
      currentValue = newValue;
    },
  };
}

/// With watchers > 셀을 감시하는 기능이 생김
function ValueCell(initialValue) {
  var currentValue = initialValue;
  // 감시자 목록 저장
  var watchers = [];
  return {
    val: function () {
      return currentValue;
    },
    update: function (f) {
      var oldValue = currentValue;
      var newValue = f(oldValue);
      // 값이 바뀔 때 모든 감시자 실행
      if (oldValue !== newValue) {
        currentValue = newValue;
        forEach(watchers, function (watcher) {
          watcher(newValue);
        });
      }
    },
    // 새로운 감시자 추가
    addWatcher: function (f) {
      watchers.push(f);
    },
  };
}
