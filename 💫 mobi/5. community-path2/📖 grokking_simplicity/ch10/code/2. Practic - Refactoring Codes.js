/// 함수 이름에 있는 암묵적 인자
function multiplyByFour(x) {
  return x * 4;
}

function multiplyBy12(x) {
  return x * 12;
}

function multiplyBySix(x) {
  return x * 6;
}

function multiplyByPi(x) {
  return x * 3.14159;
}

/// 암묵적 인자를 드러내기

function multiply(x, y) {
  return x * y;
}

// =================================================================================

// 장바구니 화면에서 제품의 수량을 늘리거나, 옷 사이즈를 늘리는 버튼에 사용하는 코드
// 함수명의 quantity와 size는 암묵적 인자
function incrementQuantityByName(cart, name) {
  let item = cart[name];
  let quantity = item["quantity"];
  let newQuantity = quantity + 1;
  let newItem = objectSet(item, "quantity", newQuantity);
  let newCart = objectSet(cart, name, newItem);
  return newCart;
}

function incrementSizeByName(cart, name) {
  let item = cart[name];
  let size = item["size"];
  let newSize = size + 1;
  let newItem = objectSet(item, "size", newSize);
  let newCart = objectSet(cart, name, newItem);
  return newCart;
}

// 암묵적 인자를 드러내기

function incrementFieldByName(cart, name, field) {
  let item = cart[name];
  let value = item[field];
  let newValue = value + 1;
  let newItem = objectSet(item, field, newValue);
  let newCart = objectSet(cart, name, newItem);
  return newCart;
}

// =================================================================================

// API 사용자가 지원하지 않는 필드의 값을 변경하지 못하게 하기

// 만약 price나 name 같은 필드는 이 함수를 사용할 수 없다면?
function incrementFieldByName(cart, name, field) {
  let item = cart[name];
  let value = item[field];
  let newValue = value + 1;
  let newItem = objectSet(item, field, newValue);
  let newCart = objectSet(cart, name, newItem);
  return newCart;
}

/// 런타임 체크 추가하기
// 필드명이 size나 quantity가 아니면 예외 처리
function incrementFieldByName(cart, name, field) {
  if (field !== "size" && field !== "quantity")
    throw "This item field cannot be incremented: " + "'" + field + "'.";
  let item = cart[name];
  let value = item[field];
  let newValue = value + 1;
  let newItem = objectSet(item, field, newValue);
  let newCart = objectSet(cart, name, newItem);
  return newCart;
}
