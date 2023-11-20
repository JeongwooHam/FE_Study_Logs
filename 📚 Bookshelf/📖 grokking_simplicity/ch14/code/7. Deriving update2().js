// [중첩된 객체에 쓸 수 있는 update2() 시각화하기]
// option이라는 필드명이 함수명 안에 포함되어 있음
function updateOption(item, option, modify) {
  return update(item, "options", (options) => update(options, option, modify));
}

/// 2 ➡️ 중첩된 횟수
// key1: options 대신 일반적이고 명시적인 인자로 변경
function update2(object, key1, key2, modify) {
  return update(object, key1, (value1) => update(value1, key2, modify));
}

/// Original

function incrementSize(item) {
  var options = item.options;
  var size = options.size;
  var newSize = size + 1;
  var newOptions = objectSet(options, "size", newSize);
  var newItem = objectSet(item, "options", newOptions);
  return newItem;
}

/// Using update2()

function incrementSize(item) {
  return update2(item, "options", "size", (size) =>  size + 1);
}
