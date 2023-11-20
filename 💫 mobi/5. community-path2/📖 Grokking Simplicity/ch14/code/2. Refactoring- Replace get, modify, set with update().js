// [조회하고 변경하고 설정하는 것을 update()로 교체하기]
/// Before refactoring
function incrementField(item, field) {
  var value = item[field]; // 객체에서 값을 조회
  var newValue = value + 1; // 값을 바꾸기
  var newItem = objectSet(item, field, newValue); // 객체에 값을 설정 (with Copy-On-Write)
  return newItem;
}

/// After refactoring
// 암묵적 인자 드러내기 + 함수 본문을 콜백으로 바꾸기
function update(object, key, modify) {
  var value = object[key]; // 값을 가져와서
  var newValue = modify(value); // 바꾸고
  var newObject = objectSet(object, key, newValue); // 반영시킨다.
  return newObject;
}

function incrementField(item, field) {
  return update(item, field, (value) => value + 1);
}

/// Step 1: 조회하고 바꾸고 설정할 것을 찾기
function halveField(item, field) {
  var value = item[field]; // 조회
  var newValue = value / 2; // 바꾸기
  var newItem = objectSet(item, field, newValue); // 설정
  return newItem;
}

/// Step 2: update()로 교체하기
function halveField(item, field) {
  // 바꾸는 동작을 콜백으로 전달하기
  return update(item, field, (value) => value / 2);
}
