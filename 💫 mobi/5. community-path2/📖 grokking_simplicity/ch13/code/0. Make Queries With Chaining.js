/* 
[우수 고객들의 가장 비싼 구매 구하기]
1. 우수 고객(3개 이상 구매) filter
2. 우수 고객을 가장 비싼 구매로 map
*/

// 1) 함수 시그니처 정의하기
function biggestPurchasesBestCustomers(customers) {
  // 2) 우수 고객 거르기
  let bestCustomers = filter(customers, function (customer) {
    return customer.purchases.length >= 3;
  });
  // 3) 각 고객의 가장 비싼 구매를 가져와 배열에 담기
  let biggestPurchases = map(bestCustomers, function (customer) {
    // 각 고객의 가장 비싼 구매를 찾아야 하므로 map의 콜백 안에 reduce가 들어감
    return reduce(
      customer.purchases,
      { total: 0 }, // reduce의 초기값으로 빈 구매 객체 사용
      function (biggestSoFar, purchase) {
        if (biggestSoFar.total > purchase.total)
          return biggestSoFar; // 가장 비싼 구매
        else return purchase;
      }
    );
  });
  return biggesetPurchases;
}
// 콜백이 중첩되어 함수가 너무 커졌음 (중첩된 콜백은 이해하기 어려움)

// max() 함수와 reduce() 단계 비교하기
// total 값을 비교함
reduce(
  customer.purchases,
  { total: 0 }, // 가능한 값 중에 가장 작은 값으로 초기화
  function (biggestSoFar, purchase) {
    if (biggestSoFar.total > purchase.total)
      return biggestSoFar; // 값을 비교하여 가장 큰 값을 리턴
    else return purchase;
  }
);

/// Find biggest number
// 값을 직접 비교함
reduce(
  numbers,
  Number.MIN_VALUE, // 가능한 값 중에 가장 작은 값으로 초기화
  function (m, n) {
    if (m > n) return m; // 값을 비교하여 가장 큰 값을 리턴
    else return n;
  }
);

/// total 값을 가져오는 부분을 콜백으로 분리하기
maxKey(customer.purchases, { total: 0 }, function (purchase) {
  return purchase.total;
});

function maxKey(array, init, f) {
  return reduce(array, init, function (biggestSoFar, element) {
    if (f(biggestSoFar) > f(element)) return biggestSoFar;
    else return element;
  });
}

// Page 318

function biggestPurchasesBestCustomers(customers) {
  let bestCustomers = filter(customers, function (customer) {
    return customer.purchases.length >= 3;
  });
  let biggestPurchases = map(bestCustomers, function (customer) {
    // maxKey로 코드가 의미하는 것을 명확하게 표현함
    // 구체적인 함수. 배열에서 가장 큰 값을 선택한다는 의미를 가짐
    return maxKey(customer.purchases, { total: 0 }, function (purchase) {
      return purchase.total;
    });
  });
  return biggestPurchases;
}

// maxKey가 max 보다 일반적!
// max는 값을 직접 비교해야 하지만 maxKey는 비교하는 값을 자유롭게 선택해서 최댓값을 구할 수 있음
function maxKey(array, init, f) {
  // reduce: 일반적인 낮은 수준의 함수, 배열의 값을 조합한다는 의미 말고 특별한 의미가 없음
  return reduce(array, init, function (biggestSoFar, element) {
    if (f(biggestSoFar) > f(element)) return biggestSoFar;
    else return element;
  });
}

function max(array, init) {
  //                         값을 그대로 비교한다고 알려줌
  return maxKey(array, init, function (x) {
    // 인자로 받은 값을 그대로 리턴
    return x;
  });
}
