// 각 고객의 구매 목록에서 전체 구매 수 도출하기
// 이전 합계를 통해 다음 합계 생성
function countAllPurchases(customers) {
  let total = 0;
  forEach(customers, function (customer) {
    total = total + customer.purchases.length;
  });
  return total;
}

// 비슷한 코드 찾아보기
// 본문: 합치는 동작 (변수의 초깃값, 변수의 다음 값을 구하는 계산 방법)
// 변수의 이전 값과 배열에 있는 현재 값으로 변수의 다음 값 계산
function countAllPurchases(customers) {
  //         🟢
  let total = 0; // 🔴 앞부분
  forEach(customers, function (customer) {
    //            🟢 본문 ==================
    total = total + customer.purchases.length;
  });
  // 🔵 뒷부분
  return total;
}

function concatenateArrays(arrays) {
  //           🟢
  let result = []; // 🔴 앞부분
  forEach(arrays, function (array) {
    //              🟢 본문 =====
    result = result.concat(array);
  });
  // 🔵 뒷부분
  return result;
}

function customersPerCity(customers) {
  //           🟢
  let cities = {}; // 🔴 앞부분
  forEach(customers, function (customer) {
    //    🟢 본문 ===================
    cities[customer.address.city] += 1;
  });
  // 🔵 뒷부분
  return cities;
}

function biggestPurchase(purchases) {
  //            =====🟢=====
  let biggest = { total: 0 }; // 🔴 앞부분
  forEach(purchases, function (purchase) {
    //       🟢 본문 ===========================================
    biggest = biggest.total > purchase.total ? biggest : purchase;
  });
  // 🔵 뒷부분
  return total;
}

/// 함수 본문을 콜백으로 바꾸기 리팩터링
// forEach()를 reduce()로 빼낸 함수
function countAllPurchases(customers) {
  // reduce()에 고객 배열과 초기값, 콜백함수 전달
  // reduce()에 전달하는 콜백함수는 인자가 두 개여야 하고, 리턴값은 첫 번째 인자와 타입이 같아야 함
  //                      초기값 / 콜백함수
  return reduce(customers, 0, function (total, customer) {
    // 지금까지 누적한 합계와 현재 추가된 값을 더한 값을 리턴
    return total + customer.purchase.length;
  });
}

function reduce(array, init, f) {
  let accum = init;
  forEach(array, function (element) {
    //        콜백에 인자 두 개 전달
    accum = f(accum, element);
  });
  return accum;
}
