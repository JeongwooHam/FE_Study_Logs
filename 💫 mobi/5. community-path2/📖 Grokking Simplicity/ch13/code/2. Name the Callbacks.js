// 단계에 이름을 붙이는 대신 콜백을 빼내기
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

/// extracted and named callbacks

function biggestPurchasesBestCustomers(customers) {
  //                                    콜백에 이름을 붙임
  let bestCustomers = filter(customers, isGoodCustomer);
  let biggestPurchases = map(bestCustomers, getBiggestPurchase);
  return biggestPurchases;
}

function isGoodCustomer(customer) {
  return customer.purchases.length >= 3;
}

function getBiggestPurchase(customer) {
  return maxKey(customer.purchases, { total: 0 }, getPurchaseTotal);
}

function getPurchaseTotal(purchase) {
  return purchase.total;
}
