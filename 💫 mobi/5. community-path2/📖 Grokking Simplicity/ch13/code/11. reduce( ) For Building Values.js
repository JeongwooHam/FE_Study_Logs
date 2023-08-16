// 값을 만들기 위한 reduce()

// 고객이 장바구니에 추가한 모든 제품을 담고있는 배열
var itemsAdded = ["shirt", "shoes", "shirt", "socks", "hat", "...."];

// 첫 번째 인자: 항목 배열 (장바구니 로그 배열 넘기기)
// 두 번째 인자: 초깃값 (장바구니는 객체로 표현될 것이므로 빈 객체 넘기기)
// 세 번째 인자: (장바구니, 배열에 들어있는 제품 이름)
var shoppingCart = reduce(itemsAdded, {}, (cart, item) => {
  // 1) 추가하려는 제품이 장바구니에 없는 경우
  if (!cart[item])
    return add_item(cart, {
      name: item,
      quantity: 1,
      // priceLookup: 제품 이름으로 가격을 가져올 수 있는 함수
      price: priceLookup(item),
    });
  // 2) 추가하려는 제품이 이미 장바구니에 있는 경우
  else {
    var quantity = cart[item].quantity;
    // 수량 늘리기
    return setFieldByName(cart, item, "quantity", quantity + 1);
  }
});

// reduce()에 전달한 함수를 장바구니 추상화 벽에 추가해 API의 일부로 만들기

var shoppingCart = reduce(itemsAdded, {}, addOne);

// addOne: 장바구니와 제품을 인자로 받아 추가된 제품이 있는 새로운 장바구니를 리턴하는 함수
// 고객이 장바구닝 제품을 추가한 모든 기록이 있어 어느 시점의 장바구니라도 생성 가능
// 모든 시점의 장바구니를 만들지 않아도 특정 시점의 장바구니를 로그를 통해 생성 가능
// 이벤트 소싱 등으로 되돌리기 등의 기능 구현 가능
function addOne(cart, item) {
  if (!cart[item])
    return add_item(cart, {
      name: item,
      quantity: 1,
      price: priceLookup(item),
    });
  else {
    var quantity = cart[item].quantity;
    return setFieldByName(cart, item, "quantity", quantity + 1);
  }
}
