// 🤖 Before Modification

function setPriceByName(cart, name, price) {
  let cartCopy = cart.slice();
  for (let i = 0; i < cartCopy.length; i++) {
    if (cartCopy[i].name === name) cartCopy[i] = setPrice(cartCopy[i], price);
  }
  return cartCopy;
}
// 하위 함수
function indexOfItem(cart, name) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) return i;
  }
  return null;
}

// 🤖 After Modification

// 수정된 후에도 여전히 서로 다른 두 계층을 가리키고 있음
function setPriceByName(cart, name, price) {
  // 여전히 slice를 사용하고 있음
  let cartCopy = cart.slice(b);
  let i = indexOfItem(cart, name);
  // 여전히 배열의 인덱스를 참조하고 있음
  if (i !== null) cartCopy[i] = setPrice(cartCopy[i], price);
  return cartCopy;
}

function indexOfItem(cart, name) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) return i;
  }
  return null;
}
