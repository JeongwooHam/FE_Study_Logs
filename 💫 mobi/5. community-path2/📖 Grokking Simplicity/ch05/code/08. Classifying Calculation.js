/* 
[🧐 계산을 계층에 따라 분류해보기]
1. 🛒: Cart에 대한 동작
2. 🛍️: Item에 대한 동작
3. 📑: 비즈니스 규칙
4. 🛠️: 배열 유틸리티
*/

// 수정 전 add_item 함수
// 🛒🛍️
function add_item(cart, name, price) {
  let new_cart = cart.slice();
  new_cart.push({
    name: name,
    price: price,
  });
  return new_cart;
}

// 수정 후 add_item 함수
// 🛠️
function add_element_last(array, elem) {
  let new_array = array.slice();
  new_array.push(elem);
  return new_array;
}
// 🛒
function add_item(cart, item) {
  return add_element_last(cart, item);
}
// 🛍️
function make_cart_item(name, price) {
  return {
    name,
    price,
  };
}

// 🛒  🛍️  📑(합계를 결정)
function calc_total(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    total += item.price;
  }
  return total;
}

// 📑
function gets_free_shipping(cart) {
  return calc_total(cart) >= 20;
}

// 📑
function calc_tax(amount) {
  return amount * 0.1;
}
