// 👔 넥타이 하나를 사면 무료로 넥타이 클립을 주는 함수

// 🤖 Before Modification
// 넥타이 클립 관련 역할을 하는 함수가 알 필요 없는 구체적인 내용을 포함함
function freeTieClip(cart) {
  let hasTie = false;
  let hasTieClip = false;
  // 반복문을 사용해 넥타이나 넥타이 클립이 있는지 확인하기
  // 장바구니 안에 제품이 있는지 여부를 확인하는 함수를 분리하면 더 명확한 수행이 가능
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    if (item.name === "tie") hasTie = true;
    if (item.name === "tie clip") hasTieClip = true;
  }
  // 넥타이를 가지고 있고 클립은 가지고 있지 않다면, 추가하기
  if (hasTie && !hasTieClip) {
    let tieClip = make_item("tie clip", 0);
    // 원본 장바구니 배열에 바로 넥타이 클립을 추가하는 방식으로 문제 해결
    // 이렇게 코드를 직접 수정할 경우 유지보수에 어려움
    return add_item(cart, tieClip);
  }
  return cart;
}

// 🤖 After Modification

function freeTieClip(cart) {
  let hasTie = isInCart(cart, "tie");
  let hasTieClip = isInCart(cart, "tie clip");
  if (hasTie && !hasTieClip) {
    let tieClip = make_item("tie clip", 0);
    return add_item(cart, tieClip);
  }
  return cart;
}
// 반복문을 추출해 새로운 함수를 만들었음
function isInCart(cart, name) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) return true;
  }
  return false;
}
