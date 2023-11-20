// 🧐 아래의 함수들에는 어떤 문제점이 있을까?

// 요구사항: 장바구니에 담긴 제품이 주문 시 무료 배송인지 확인하기
// 구현사항: 제품의 합계와 가격으로 무료 배송 여부를 확인함
// 📢 비즈니스 요구 사항과 맞지 않는 인자!
function gets_free_shipping(total, item_price) {
  return item_price + total >= 20;
}

// 📢 중복되는 코드 (total += item.price)
function calc_total(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    total += item.price;
  }
  return total;
}
