// [필드명을 명시적으로 만들기]

// BEFORE: 필드명이 함수명에 포함되어 있음음
function incrementQuantity(item) {
  var quantity = item["quantity"];
  var newQuantity = quantity + 1;
  var newItem = objectSet(item, "quantity", newQuantity);
  return newItem;
}

function incrementSize(item) {
  var size = item["size"];
  var newSize = size + 1;
  var newItem = objectSet(item, "size", newSize);
  return newItem;
}

// AFTER: 함수 이름에 있는 암묵적 인자를 드러냄
// field: 필드명을 명시적인 인자로 만듦
function incrementField(item, field) {
  var value = item[field];
  var newValue = value + 1;
  var newItem = objectSet(item, field, newValue);
  return newItem;
}

// ===================================================================

// increment, decrement, double, havle라는 비슷한 동작들 때문에 중복이 생김
// ➡️ 동작 이름이 함수에 있다! (명시적으로 바꿔야 할 인자가 일반 값이 아니고 동작임)
// 암묵적 인자를 드러내기 + 함수 본문을 콜백으로 바꾸기

function decrementField(item, field) {
  var value = item[field];
  var newValue = value - 1;
  var newItem = objectSet(item, field, newValue);
  return newItem;
}

function doubleField(item, field) {
  var value = item[field];
  var newValue = value * 2;
  var newItem = objectSet(item, field, newValue);
  return newItem;
}

function halveField(item, field) {
  var value = item[field];
  var newValue = value / 2;
  var newItem = objectSet(item, field, newValue);
  return newItem;
}
