// 세 개 이상 제품을 구매한 우수 고객에 대해서만 메일 보내기
function selectBestCustomers(customers) {
  let newArray = [];
  forEach(customers, function (customer) {
    // 🟢 본문 =======================
    if (customer.purchases.length >= 3) newArray.push(customer);
  });
  // 🔵 뒷부분
  return newArray;
}

// 비슷한 코드 찾아보기
// 본문: 결과 배열에 어떤 항목을 담을지 결정함
function selectBestCustomers(customers) {
  // 🔴 앞부분
  let newArray = [];
  forEach(customers, function (customer) {
    // 🟢 본문 =======================
    if (customer.purchases.length >= 3) newArray.push(customer);
  });
  // 🔵 뒷부분
  return newArray;
}

function selectCustomersAfter(customers, date) {
  // 🔴 앞부분
  let newArray = [];
  forEach(customers, function (customer) {
    // 🟢 본문 ===================
    if (customer.signupDate > date) newArray.push(customer);
  });
  // 🔵 뒷부분
  return newArray;
}

function selectCustomersBefore(customers, date) {
  // 🔴 앞부분
  let newArray = [];
  forEach(customers, function (customer) {
    // 🟢 본문 ===================
    if (customer.signupDate < date) newArray.push(customer);
  });
  // 🔵 뒷부분
  return newArray;
}

function singlePurchaseCustomers(customers) {
  // 🔴 앞부분
  let newArray = [];
  forEach(customers, function (customer) {
    // 🟢 본문 ========================
    if (customer.purchases.length === 1) newArray.push(customer);
  });
  // 🔵 뒷부분
  return newArray;
}

/// 함수 본문을 콜백으로 바꾸기 리팩터링
// 1. forEacth()를 filter()로 빼내기
function selectBestCustomers(customers) {
  return filter(customers, function (customer) {
    // 2. 표현식을 함수로 빼서 인자로 전달하기
    return customer.purchases.length >= 3;
  });
}
// 3. 조건식을 콜백으로 불러서 사용하기
function filter(array, f) {
  let newArray = [];
  forEach(array, function (element) {
    if (f(element)) newArray.push(element);
  });
  return newArray;
}
