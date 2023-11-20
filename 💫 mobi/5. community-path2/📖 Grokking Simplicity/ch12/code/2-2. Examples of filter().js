// filter() 예제: 아무것도 구입하지 않은 고객 구하기

// 가진 것: 고객 배열
// 필요한 것: 아무것도 구입하지 않은 고객 배열
// 함수: 고객 하나를 받아 아무것도 구입하지 않았다면 true을 리턴하는 함수

// 1. 가지고 있는 customers 배열에 대해 필터링 진행
// 2. 아무것도 구입하지 않은 고객을 결정하는 함수를 전달
filter(customers, function (customer) {
  // 3. true이나 false 값 리턴
  // 4. filter는 true를 리턴하는 항목 유지
  return customer.purchases.length === 0;
}); // 5. 필터링된 고객 배열 리턴. 아무것도 구입하지 않은 고객만 배열에 남아있음

// 🤔 결과배열에서 null 항목을 없애려면 어떻게 해야 할까?
let allEmails = map(customers, function (customer) {
  return customer.email; // 고객 이메일이 null이라면 배열에 null이 들어가게 됨
});
// 올바른 값만 남겨두기 위해 filter()를 사용해 null 제거
let emailsWithoutNulls = filter(emailsWithNulls, function (email) {
  return email !== null;
});

// 임의의 고객들을 선택해 특별한 마케팅을 하기 위해 고객 아이디가 3으로 나눠떨어지는 고객과 아닌 고객 구분하기
let testGroup = filter(customers, function (customer) {
  return customer.id % 3 === 0;
});

let nonTestGroup = filter(customers, function (customer) {
  return customer.id % 3 !== 0;
});
