/// 이 책에서 구현한 것
var customerNames = map(customers, function (c) {
  return c.firstName + " " + c.lastName;
});

/// JS 내장 함수
var customerNames = customers.map(function (c) {
  return c.firstName + " " + c.lastName;
});

/// 이 책에서 구현한 것
var window = 5;
var indices = range(0, array.length);
var windows = map(indices, function (i) {
  return array.slice(i, i + window);
});
var answer = map(windows, average);

/// 메서드로 체이닝
// JS의 함수형 도구는 메서드이므로 체이닝 시 중간 변수에 할당하지 않고 이어서 사용 가능
// 점 연산자를 기준으로 정렬할 수 있음
var window = 5;
var answer = range(0, array.length)
  .map(function (i) {
    return array.slice(i, i + window);
  })
  .map(average);

/// ES6의 화살표 문법으로 콜백을 짧고 명확하게 만들 수 있음
var window = 5;
var answer = range(0, array.length)
  .map((i) => array.slice(i, i + window))
  .map(average);

/// map과 filter의 두 번째 인자를 사용하여 항목과 인덱스 함께 전달하기
var window = 5;
var average = (array) => array.reduce((sum, e) => sum + e, 0) / array.length;
var answer = array.map((e, i) => array.slice(i, i + window)).map(average);
