// 장바구니 제품을 담고 있는 전역 변수: 액션(변경 가능)
let shopping_cart = [];
// 금액 합계를 담고 있는 전역 변수: 액션
let shopping_cart_total = 0;

function add_item_to_cart(name, price) {
  // 장바구니에 제품 추가: 액션(전역 변수를 바꿈)
  shopping_cart.push({
    name: name,
    price: price,
  });
  // 제품 목록이 바뀌었으므로 금액 합계 업데이트
  calc_cart_total();
}

// 구매 버튼에 무료 배송 아이콘을 표시하기 위한 함수: 액션(DOM에서 읽음)
function update_shipping_icons() {
  // 페이지의 모든 구매 버튼을 가져와 반복문 적용하기 위한 변수
  let buy_buttons = get_buy_buttons_dom();
  // 무료 배송 가능 여부를 확인해서 아이콘 표시 여부를 결정하는 반복문
  for (let i = 0; i < buy_buttons.length; i++) {
    let button = buy_buttons[i];
    let item = button.item;
    // 해당 상품 구매 시 장바구니 총 금액이 20달러를 넘어갈 경우 무료 배송 아이콘을 보여줌
    // : 액션(DOM을 수정)
    if (item.price + shopping_cart_total >= 20)
      button.show_free_shipping_icon();
    // 담아도 20달러가 넘지 않는 경우 아이콘을 숨김: 액션
    else button.hide_free_shipping_icon();
  }
}

// 세금 계산하기 (Without Functional Programming)
function update_tax_dom() {
  // 액션(DOM을 수정)
  set_tax_dom(shopping_cart_total * 0.1);
}

function calc_cart_total() {
  // 액션(전역 변수의 값을 바꿈)
  shopping_cart_total = 0;
  // 모든 제품 값을 더해줌
  for (let i = 0; i < shopping_cart.length; i++) {
    let item = shopping_cart[i];
    shopping_cart_total += item.price;
  }
  // 현재 장바구니 금액의 상태를 나타내는 DOM 부분을 업데이트하는 코드
  set_cart_total_dom();
  // 합계 금액이 바뀔 때마다 모든 아이콘을 업데이트하기 위해 호출
  update_shipping_icons();
  // 새로운 함수를 만들어서 호출
  update_tax_dom();
}
