// 천천히 두 번 클릭하면 괜찮지만 빠르게 두 번 쿨락허면 올바르지 않은 값이 입력되는 이유

// 사용자가 장바구니에 추가버튼 클릭 시 실행되는 함수
function add_item_to_cart(name, price, quantity) {
  // 장바구니 전역 변수를 읽고 쓰는 부분
  cart = add_item(cart, name, price, quantity);
  calc_cart_total();
}

function calc_cart_total() {
  total = 0;
  // 제품 API에 AJAX 요청을 보냄
  // 콜백: 요청 완료 시 실행됨
  cost_ajax(cart, (cost) => {
    total += cost;
    // 판매 API에 AJAX 요청을 보냄
    // 콜백: 판매 API 응답이 오면 실행됨
    shipping_ajax(cart, (shipping) => {
      total += shipping;
      // 합계를 DOM에 보여주는 부분
      update_total_dom(total);
    });
  });
}
