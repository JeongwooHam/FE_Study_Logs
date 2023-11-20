// 🤖 Before Modification
function setPriceByName(cart, name, price) {
  let cartCopy = cart.slice();
  let i = indexOfItem(cart, name);
  if (i !== null) cartCopy[i] = setPrice(cartCopy[i], price);
  return cartCopy;
}

function arraySet(array, idx, value) {
  let copy = array.slice();
  copy[idx] = value;
  return copy;
}

// 🤖 After Modification

// setPriceByName이 바로 slice를 참조하던 긴 화살표가 짧아짐
// 하지만 setPrice와 slice 사이에 새로운 계층이 하나 더 생성됨
// 우선 길이를 짧게 만드는 것에 의의를 둘 것!
function setPriceByName(cart, name, price) {
  // 바로 slice 사용하는 대신 중간 단계 함수 사용
  let i = indexOfItem(cart, name);
  // 여전히 배열의 인덱스를 직접 참조하고 있음
  if (i !== null) return arraySet(cart, i, setPrice(cart[i], price));
  return cart;
}

function arraySet(array, idx, value) {
  let copy = array.slice();
  copy[idx] = value;
  return copy;
}
