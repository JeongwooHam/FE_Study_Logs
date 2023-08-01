// 🤖 Before Modification
// remove_item_by_name(상위 계층)
function remove_item_by_name(cart, name) {
  let idx = null;
  // for loop (하위 계층)
  for (let i = 0; i < cart.length; i++) {
    // array index (하위 계층)
    if (cart[i].name === name) idx = i;
  }
  // removeItems (하위 계층)
  if (idx !== null) return removeItems(cart, idx, 1);
  return cart;
}

// 🤖 After Modification

function remove_item_by_name(cart, name) {
  let idx = indexOfItem(cart, name);
  if (idx !== null) return removeItems(cart, idx, 1);
  return cart;
}
// 반복문을 새로운 함수로 빼냄
function indexOfItem(cart, name) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) return i;
  }
  return null;
}

// remove_items와 indexOfItem은 같은 계층에 있는 것 같지만 사실 indexOfItem이 조금 더 위에 위치
// indexOfItem은 배열에 있는 항목이 name 속성을 가지고 있다는 사실을 알아야 함
// remove_items는 배열에 들어있는 항목이 어떤 속성을 갖는지 몰라도 됨
// 즉, remove_items가 더 일반적이고 조금 더 낮은 계층에 위치함
