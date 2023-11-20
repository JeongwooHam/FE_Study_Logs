// 🤖 Before Modification

// 불리언 값을 리턴하므로 사용하는 곳에서 장바구니의 구조를 몰라도 됨
function isInCart(cart, name) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) return true;
  }
  return false;
}

// 더 낮은 수준의 함수
// 인덱스를 리턴하므로 사용하는 곳에서 장바구니가 배열이라는 것을 알아야 함
// indexOfItem을 사용해 isInCart를 수정해줄 수 있음
function indexOfItem(cart, name) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) return i;
  }
  return null;
}

// 🤖 After Modification
// 함수 재사용으로 코드가 더 깔끔해지고 계층도 명확해졌음

// 상위 계층 함수
function isInCart(cart, name) {
  return indexOfItem(cart, name) !== null;
}
// 하위 계층 함수 ➡️ for문, 배열의 인덱스 사용
function indexOfItem(cart, name) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) return i;
  }
  return null;
}
