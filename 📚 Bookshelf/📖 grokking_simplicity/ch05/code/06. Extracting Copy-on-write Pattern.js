// 🤖 Before Modification
// 일반적인 배엵과 항목에 사용할 수 있는 함수이지만 이름만 보았을 때는 장바구니에만 사용할 수 있을 것 같음
function add_item(cart, item) {
  let new_cart = cart.slice();
  new_cart.push(item);
  return new_cart;
}

// ====================================================================

// 🤖 After Modification

// 일반적인 이름으로 수정 → 재사용할 수 있는 UTILITY 함수가 되었음
function add_element_last(array, elem) {
  let new_array = array.slice();
  new_array.push(elem);
  return new_array;
}

// 원래의 장바구니 관련 함수
function add_item(cart, item) {
  return add_element_last(cart, item);
}
