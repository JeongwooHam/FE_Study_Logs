// 🌟 처음 구매한 고객에게 특별 혜택 이메일 보내기

// 👾 Before Modification
// 1. 한 번만 구매한 고객 거르기
let _firstTimers = filter(customers, function (customer) {
  return customer.purchases.length === 1;
});
// 2. 고객 목록을 이메일 목록으로 바꾸기
// 앞에서 정의한 변수를 다음 단계의 인자로 사용함
let _firstTimerEmails = map(firstTimers, function (customer) {
  return customer.email;
});

// 👾 콜백에 이름을 붙여 더 짧고 명확하게 만들기
let firstTimers = filter(customers, isFirstTimer);
let firstTimerEmails = map(firstTimers, getCustomerEmail);
// 다른 곳에서 정의하고 재사용 가능함
function isFirstTimer(customer) {
  return customer.purchases.length === 1;
}

function getCustomerEmail(customer) {
  return customer.email;
}

// 🌟 구매 금액이 최소 100 달러를 넘고 두 번 이상 구매한 고객 찾기
function bigSpenders(customers) {
  let withBigPurchases = filter(customers, hasBigPurchase);
  let with2OrMorePurchases = filter(withBigPurchases, has2OrMorePurchases);
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

// 🌟 평균을 계산하는 함수 만들기
function average(numbers) {
  return reduce(numbers, 0, plus) / numbers.length;
}

function plus(a, b) {
  return a + b;
}

// 🌟 각 고객의 구매액 평균 구하기
function averagePurchaseTotals(customers) {
  return map(customers, function (customer) {
    let purchaseTotals = map(customer.purchases, function (purchase) {
      return purchase.total;
    });
    return average(purchaseTotals);
  });
}
