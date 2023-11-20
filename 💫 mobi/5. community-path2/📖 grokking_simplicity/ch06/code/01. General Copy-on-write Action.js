// 🛠️ 재사용하기 쉽도록 함수 일반화하기

// 🤖 Before Modification
function removeItems(array, idx, count) {
  array.splice(idx, count);
}

// 🤖 After Modification
function removeItems(array, idx, count) {
  // 직접 인자를 수정하는 것이 아니라 복사본을 수정하도록 함
  let copy = array.slice();
  copy.splice(idx, count);
  return copy;
}

// 🤖 Before Modification
function remove_item_by_name(cart, name) {
  // removeItems 함수 내에서 복사본을 사용하므로 필요 없는 코드
  let new_cart = cart.slice();
  let idx = null;
  for (let i = 0; i < new_cart.length; i++) {
    if (new_cart[i].name === name) idx = i;
  }
  if (idx !== null) new_cart.removeItems(idx, 1);
  return new_cart;
}

// 🤖 After Modification
function remove_item_by_name(cart, name) {
  let idx = null;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) idx = i;
  }
  // cart 인자의 값이 직접 변경되는 것이 아니므로 new_cart로 복사해서 호출할 필요 없음
  if (idx !== null) return removeItems(cart, idx, 1);
  return cart;
}
