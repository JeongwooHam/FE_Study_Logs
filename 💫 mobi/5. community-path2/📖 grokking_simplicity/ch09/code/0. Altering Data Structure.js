function remove_item_by_name(cart, name) {
  let idx = indexOfItem(cart, name);
  if (idx !== null) return splice(cart, idx, 1);
  return cart;
}

function indexOfItem(cart, name) {
  // 🤔 배열을 순회하며 하나씩 검사하는 것보다 해시 맵에서 찾는게 빠르지 않을까?
  // 해시맵: 요소가 키-값 쌍의 형태로 저장되는 요소 모음
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) return i;
  }
  return null;
}
