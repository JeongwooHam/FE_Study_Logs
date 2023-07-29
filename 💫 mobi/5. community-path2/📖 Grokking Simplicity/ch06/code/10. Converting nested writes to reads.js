// 제품 이름으로 해당 제품의 가격을 바꾸는 쓰기 동작을 읽기로 바꾸기
const exampleCart = [
  { name: "a", price: 100 },
  { name: "b", price: 200 },
  { name: "c", price: 300 },
];

setPriceByName(exampleCart, "a", 400);

// 🤖 Before Modification
function setPriceByName(cart, name, price) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) cart[i].price = price;
  }
}

// 🤖 After Modification
function setPriceByName(cart, name, price) {
  // 복사본(1) 생성
  // 내부의 항목들은 exampleCart의 원래 객체를 가리킴
  let cartCopy = cart.slice();
  for (let i = 0; i < cartCopy.length; i++) {
    // 복사본의 중첩된 항목을 바꾸기 위해 copy-on-write 동작 호출
    // 반복하다가 name이 같은 값을 찾으면 setPrice를 한 번만 호출함
    // 해당 객체의 복사본(2) 생성하여 가격 설정
    if (cartCopy[i].name === name) cartCopy[i] = setPrice(cartCopy[i], price);
  }
  // 나머지 두 객체는 동일하게 공유하고, 나머지 하나만 바뀐 객체를 가리키도록 배열 수정
  return cartCopy;
}

// =================================================================================

// 🤖 Before Modification
function setQuantityByName(cart, name, quantity) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) cart[i].quantity = quantity;
  }
}

// 🤖 After Modification
function setQuantityByName(cart, name, quantity) {
  let cartCopy = cart.slice();
  for (let i = 0; i < cartCopy.length; i++) {
    if (cartCopy[i].name === name)
      cartCopy[i] = objectSet(cartCopy[i], "quantity", quantity);
  }
  return cartCopy;
}
