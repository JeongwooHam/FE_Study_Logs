// 데이터를 사용해 창의적으로 만들기

// 고객이 제품을 삭제하는 경우 처리하기

// 고객이 제품을 추가했는지/삭제했는지를 알려주는 값과 제품에 대한 값 함께 기록하기
// 각 항목은 동작과 제품으로 구성되어 있음
var itemOps = [
  ["add", "shirt"],
  ["add", "shoes"],
  ["remove", "shirt"],
  ["add", "socks"],
  ["remove", "hat"],
];

var shoppingCart = reduce(itemOps, {}, function (cart, itemOp) {
  var op = itemOp[0];
  var item = itemOp[1];
  // 동작에 따라 알맞은 함수 실행
  if (op === "add") return addOne(cart, item);
  if (op === "remove") return removeOne(cart, item);
});

function removeOne(cart, item) {
  // 장바구니에 제품이 없다면 아무것도 실행하지 않음
  if (!cart[item]) return cart;
  else {
    var quantity = cart[item].quantity;
    // 수량이 하나일 때는 제품 삭제
    if (quantity === 1) return remove_item_by_name(cart, item);
    // 그렇지 않다면 제품 개수 줄이기
    else return setFieldByName(cart, item, "quantity", quantity - 1);
  }
}
