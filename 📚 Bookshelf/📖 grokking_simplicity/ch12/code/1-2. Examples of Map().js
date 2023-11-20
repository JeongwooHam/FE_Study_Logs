// map() 예제: 고객에게 메일 보내기

// 가진 것: 고객 배열
// 필요한 것: 고객 이메일 주소 배열
// 함수: 고객 하나를 받아 고객 이메일 주소를 리턴하는 함수

// 가지고 있는 customers 배열 전체에 map() 사용
// 고객의 이메일 주소를 만드는 함수를 넘김
map(customers, function (customer) {
  return customer.email; // 모든 고객의 이메일을 배열로 리턴
});

/// 고객에게 전송할 메일의 내용을 생성하는 함수
map(customers, function (customer) {
  return {
    firstName: customer.firstName,
    lastName: customer.lastName,
    address: customer.address,
  };
});
