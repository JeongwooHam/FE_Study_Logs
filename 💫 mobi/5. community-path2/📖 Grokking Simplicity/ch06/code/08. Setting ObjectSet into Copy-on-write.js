// Object.assign을 사용해서 제품 가격 설정하기
// 🤖 Before Modification
function setPrice(item, new_price) {
  item.price = new_price;
}

// 🤖 After Modification
function setPrice(item, new_price) {
  // 1. 복사본 만들기
  let item_copy = Object.assign({}, item);
  // 2. 복사본 변경하기
  item_copy.price = new_price;
  // 3. 복사본 리턴하기
  return item_copy;
}

// ==========================================================

// copy-on-write 방식으로 객체에 값 설정하는 함수
function objectSet(object, key, value) {
  let copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}

// ==========================================================

// 🤖 Before Modification
function setPrice(item, new_price) {
  let item_copy = Object.assign({}, item);
  item_copy.price = new_price;
  return item_copy;
}

// 🤖 After Modification
// objectSet 사용해 제품 가격 설정해주기
function setPrice(item, new_price) {
  return objectSet(item, "price", new_price);
}

// objectSet 사용해 제품 개수 설정하기
function setQuantity(item, new_quantity) {
  return objectSet(item, "quantity", new_quantity);
}
