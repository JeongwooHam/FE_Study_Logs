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
  let bestCustomers = selectBestCustomers(customers);
  let biggestPurchases = getBiggestPurchases(bestCustomers);
  return biggestPurchases;
}

function selectBestCustomers(customers) {
  return filter(customers, function (customer) {
    return customer.purchases.length >= 3;
  });
}

function getBiggestPurchases(customers) {
  return map(customers, getBiggestPurchase);
}

function getBiggestPurchase(customer) {
  return maxKey(customer.purchases, { total: 0 }, function (purchase) {
    return purchase.total;
  });
}
