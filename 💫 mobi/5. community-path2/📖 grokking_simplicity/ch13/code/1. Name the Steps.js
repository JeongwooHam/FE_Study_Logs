function biggestPurchasesBestCustomers(customers) {
  let bestCustomers = filter(customers, function (customer) {
    return customer.purchases.length >= 3;
  });
  let biggestPurchases = map(bestCustomers, function (customer) {
    return maxKey(customer.purchases, { total: 0 }, function (purchase) {
      return purchase.total;
    });
  });
  return biggestPurchases;
}

function biggestPurchasesBestCustomers(customers) {
  // 1단계
  let bestCustomers = selectBestCustomers(customers);
  // 2단계
  let biggestPurchases = getBiggestPurchases(bestCustomers);
  return biggestPurchases;
}

// 고차함수에 이름을 붙여 현재 문맥에 추가하기
function selectBestCustomers(customers) {
  return filter(customers, function (customer) {
    return customer.purchases.length >= 3;
  });
}

function getBiggestPurchases(customers) {
  //                    고차함수를 함수로 빼냄
  return map(customers, getBiggestPurchase);
}

function getBiggestPurchase(customer) {
  return maxKey(customer.purchases, { total: 0 }, function (purchase) {
    return purchase.total;
  });
}
