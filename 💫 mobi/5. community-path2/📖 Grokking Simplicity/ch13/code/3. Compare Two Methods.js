var firstTimers = filter(customers, function (customer) {
  return customer.purchases.length === 1;
});
var firstTimerEmails = map(firstTimers, function (customer) {
  return customer.email;
});

var firstTimers = filter(customers, isFirstTimer);
var firstTimerEmails = map(firstTimers, getCustomerEmail);

function isFirstTimer(customer) {
  return customer.purchases.length === 1;
}

function getCustomerEmail(customer) {
  return customer.email;
}

function bigSpenders(customers) {
  var withBigPurchases = filter(customers, hasBigPurchase);
  var with2OrMorePurchases = filter(withBigPurchases, has2OrMorePurchases);
  return with2OrMorePurchases;
}

function hasBigPurchase(customer) {
  return filter(customer.purchases, isBigPurchase).length > 0;
}

function isBigPurchase(purchase) {
  return purchase.total > 100;
}

function has2OrMorePurchases(customer) {
  return customer.purchases.length >= 2;
}

function average(numbers) {
  return reduce(numbers, 0, plus) / numbers.length;
}

function plus(a, b) {
  return a + b;
}

function averagePurchaseTotals(customers) {
  return map(customers, function (customer) {
    var purchaseTotals = map(customer.purchases, function (purchase) {
      return purchase.total;
    });
    return average(purchaseTotals);
  });
}
