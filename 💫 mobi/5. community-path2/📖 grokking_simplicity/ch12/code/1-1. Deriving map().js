/// for 반복문을 사용한 코드
function emailsForCustomers(customers, goods, bests) {
  let emails = [];
  for (let i = 0; i < customers.length; i++) {
    let customer = customers[i];
    let email = emailForCustomer(customer, goods, bests);
    emails.push(email);
  }
  return emails;
}

/// forEach()를 사용한 코드
function emailsForCustomers(customers, goods, bests) {
  let emails = [];
  forEach(customers, function (customer) {
    let email = emailForCustomer(customer, goods, bests);
    emails.push(email);
  });
  return emails;
}

// 비슷한 코드들을 보면서 함수 본문을 콜백으로 바꾸는 리팩토링 수행하기
// 결과 배열에 넣을 값을 만드는 부분만 다르고 비슷한 코드!
function emailsForCustomers(customers, goods, bests) {
  // 🔴 앞부분
  let emails = [];
  for (let i = 0; i < customers.length; i++) {
    let customer = customers[i];
    //          🟢 본문
    let email = emailForCustomer(customer, goods, bests);
    emails.push(email);
  }
  // 🔵 뒷부분
  return emails;
}

function biggestPurchasePerCustomer(customers) {
  // 🔴 앞부분
  let purchases = [];
  for (let i = 0; i < customers.length; i++) {
    let customer = customers[i];
    //             🟢 본문
    let purchase = biggestPurchase(customer);
    purchases.push(purchase);
  }
  // 🔵 뒷부분
  return purchases;
}

function customerFullNames(customers) {
  // 🔴 앞부분
  let fullNames = [];
  for (let i = 0; i < customers.length; i++) {
    let cust = customers[i];
    //         🟢 본문
    let name = cust.firstName + " " + cust.lastName;
    fullNames.push(name);
  }
  // 🔵 뒷부분
  return fullNames;
}

function customerCities(customers) {
  // 🔴 앞부분
  let cities = [];
  for (let i = 0; i < customers.length; i++) {
    let customer = customers[i];
    //         🟢 본문
    let city = customer.address.city;
    cities.push(city);
  }
  // 🔵 뒷부분
  return cities;
}

/// 콜백으로 바꾸기
function emailsForCustomers(customers, goods, bests) {
  //                    본문은 콜백으로 전달
  return map(customers, function (customer) {
    // 본문을 콜백으로 빼냄
    return emailForCustomer(customer, goods, bests);
  });
}
// forEach를 map으로 빼냄
function map(array, f) {
  let newArray = [];
  forEach(array, function (element) {
    //            여기서 콜백 호출
    newArray.push(f(element));
  });
  return newArray;
}
