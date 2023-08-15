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
