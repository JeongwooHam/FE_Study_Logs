/// BEFORE: 값 하나에 map()을 두 번 부르는 동작
var names = map(customers, getFullName);
var nameLengths = map(names, stringLength);

/// AFTER: 두 동작을 하나로 조합
// 가비지 컬렉션이 필요 없음
var nameLengths = map(customers, function (customer) {
  return stringLength(getFullName(customer));
});

/// BEFORE: 값 하나에 filter()을 두 번 부르는 동작
var goodCustomers = filter(customers, isGoodCustomer);
var withAddresses = filter(goodCustomers, hasAddress);

/// AFTER: 두 동작을 하나로 조합
// 값 하나에 두 번 filter()을 적용하는 것은 두 값에 && 연산자를 적용하는 것과 같음
var withAddresses = filter(customers, function (customer) {
  return isGoodCustomer(customer) && hasAddress(customer);
});

/// BEFORE: map() 다음에 reduce()를 사용하는 동작
// reduce()는 추가적인 계산을 받을 수 있음
var purchaseTotals = map(purchases, getPurchaseTotal);
var purchaseSum = reduce(purchaseTotals, 0, plus);

// AFTER: reduce() 콜백에서 계산 수행
// map()을 사용하지 않아 가비지 컬렉션할 중간 배열을 생성하지 않았음
var purchaseSum = reduce(purchases, 0, function (total, purchase) {
  return total + getPurchaseTotal(purchase);
});
