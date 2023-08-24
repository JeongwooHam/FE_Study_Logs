function incrementField(item, field) {
  var value = item[field];
  var newValue = value + 1;
  var newItem = objectSet(item, field, newValue);
  return newItem;
}

/// Extracted

function incrementField(item, field) {
  //                              값을 바꾸는 함수 전달
  return updateField(item, field, function (value) {
    return value + 1;
  });
}

// 모든 동작을 고차 함수 하나로 합침
// 바꾸고 싶은 필드와 동작을 콜백으로 전달!
function updateField(item, field, modify) {
  var value = item[field];
  var newValue = modify(value);
  var newItem = objectSet(item, field, newValue);
  return newItem;
}

/// 특정 필드를 바꾸는 것이 아니므로 함수 이름을 일반적인 이름으로 바꿔줌
function update(object, key, modify) {
  var value = object[key]; // 값을 가져와서
  var newValue = modify(value); // 바꾸고
  var newObject = objectSet(object, key, newValue); // 반영시킨다.
  return newObject;
}
// ➡️ 바꿀 객체와 키 값, 바꾸는 동작을 함수에서 넘겨주면 됨
// objectSet: Copy-On-Write ➡️ 원본 해시 맵을 바꾸지 않는다!

// ==============================================================================

// [값을 바꾸기 위해 update() 사용하기]
// 직원 데이터에서 월급을 10% 인상하기
var employee = {
  name: "Kim",
  salary: 120000,
};

// 월급을 인자로 받아 10%를 올려주는 함수
function raise10Percent(salary) {
  return salary * 1.1;
}

// raise10Percent()를 직원 객체(해시 맵)에 사용할 수 있게 해줌
// update()는 특정 값을 다루는 동작을 받아 특정 키가 있는 해시 맵에 적용함 (중첩된 문맥 안에 있는 값에 함수 적용)
update(employee, "salary", raise10Percent);

// 원본을 바꾸지 않으므로 반환값을 원래 변수에 다시 할당하여 사용한다.
var employee = {
  name: "Kim",
  salary: 120000,
};
// 액션(상태변경)                               계산    ➡️ 분리!
employee = update(employee, "salary", raise10Percent); // 원래 값을 새 값으로 바꿈
