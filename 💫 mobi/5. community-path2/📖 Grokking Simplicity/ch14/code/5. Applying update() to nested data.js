// [중첩된 데이터에 update() 사용하기]
function incrementSize(item) {
  var options = item.options;
  var size = options.size;
  var newSize = size + 1;
  var newOptions = objectSet(options, "size", newSize);
  var newItem = objectSet(item, "options", newOptions);
  return newItem;
}

/// Refactored

function incrementSize(item) {
  // 조회
  var options = item.options;
  // 조회, 변경, 설정을 update()로 바꿈
  // 변경
  var newOptions = update(options, "size", increment);
  // 설정
  var newItem = objectSet(item, "options", newOptions);
  return newItem;
}

/// Refactored twice
// 두 번 리팩터링한 코드
function incrementSize(item) {
  return update(item, "options", (options) =>
    // 안쪽 update()를 바깥쪽 update()의 콜백 함수 안에 넣음
    update(options, "size", increment)
  );
}
// ➡️ update()를 중첩해서 부르면 더 깊은 단계로 중첩된 객체에서도 사용 가능!
