// 🤖 Before Modification
// add_item은 단순히 장바구니에 제품을 추가하는 기능 외에 다양한 역할을 함
function add_item(cart, name, price) {
  // 1. 배열을 복사함
  let new_cart = cart.slice();
  // 2. item 객체를 생성
  // 3. 복사본에 item 추가
  new_cart.push({
    name: name,
    price: price,
  });
  // 4. 복사본 반환
  return new_cart;
}
// 함수를 호출하는 부분
add_item(shopping_cart, "shoes", 3.45);

// ====================================================================

// 🤖 After Modification
// item 객체 생성자 함수를 별도로 만들어줌
function make_cart_item(name, price) {
  return {
    name: name,
    price: price,
  };
}

// copy-on-write를 구현한 부분이므로 함께 두는 것이 좋음
function add_item(cart, item) {
  let new_cart = cart.slice();
  new_cart.push(item);
  return new_cart;
}

/*
  item 구조만 알고 있는 함수와 cart 구조만 알고 있는 함수로 분리
  → cart, item을 각각 독립적으로 확장할 수 있음
*/

// 함수를 호출하는 부분 수정
add_item(shopping_cart, make_cart_item("shoes", 3.45));
