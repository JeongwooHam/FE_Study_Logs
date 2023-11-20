// 🤖 Before Modification
function add_item_to_cart(name, price) {
  let item = make_cart_item(name, price);
  shopping_cart = add_item(shopping_cart, item);
  let total = calc_total(shopping_cart);
  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart);
  update_tax_dom(total);
  // 신뢰할 수 없는 코드가 안전한 코드 내부에 들어가 있어 로직 구분이 어렵고
  // 해당 함수를 재사용해야 할 수도 있음
  let cart_copy = deepCopy(shopping_cart);
  black_friday_promotion(cart_copy);
  shopping_cart = deepCopy(cart_copy);
}

// 🤖 After Modification
/// 신뢰할 수 없는 코드를 감싸서 새로운 함수로 만들기
function add_item_to_cart(name, price) {
  let item = make_cart_item(name, price);
  shopping_cart = add_item(shopping_cart, item);
  let total = calc_total(shopping_cart);
  set_cart_total_dom(total);
  update_shipping_icons(shopping_cart);
  update_tax_dom(total);
  shopping_cart = black_friday_promotion_safe(shopping_cart);
}

// 코드를 빼내서 새로운 함수로 만듦
function black_friday_promotion_safe(cart) {
  let cart_copy = deepCopy(cart);
  black_friday_promotion(cart_copy);
  return deepCopy(cart_copy);
}

// ======================================================================

// 🤖 Before Modification
// 모든 직원을 배열 형태의 인자로 받고, 급여를 배열 형태로 반환
// 직원 배열이 바뀔 수도 있고, 해당 변경이 급여 계산에 어떤 영향을 미칠지 알 수 없음
// 즉, 신뢰할 수 없는 코드!
function payrollCalc(employees) {
  // ...
  return payrollChecks;
}

// 🤖 After Modification
// 방어적 복사를 적용한 코드
function payrollCalcSafe(employees) {
  let copy = deepCopy(employees);
  let payrollChecks = payrollCalc(copy);
  return deepCopy(payrollChecks);
}

// ======================================================================

// 🤖 Before Modification
// 사용자 데이터를 제공하는 함수
// 사용자 정보가 바뀔 때마다 바뀐 사용자 정보를 알 수 있게 함

// 1. 콜백 함수를 인자로 넘겨서
//    사용자가 정보 변경 시 사용자 데이터와 함께 함수를 불러 줌
// 모든 콜백함수는 같은 사용자 데이터를 참조하는데, 사용자 데이터는 변경될 수 있음
userChanges.subscribe(function (user) {
  processUser(user); // 안전지대에 있는 함수
});

userChanges.subscribe(function (user) {
  // 방어적 복사
  let userCopy = deepCopy(user);
  procssUser(userCopy);
  // 데이터가 안전지대 밖으로 나가지 않으므로 여기서는 방어적 복사 필요 없음
});
