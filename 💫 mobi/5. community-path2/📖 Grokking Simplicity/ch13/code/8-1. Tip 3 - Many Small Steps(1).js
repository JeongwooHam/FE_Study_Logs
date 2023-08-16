var answer = [];
var window = 5;

for (var i = 0; i < array.length; i++) {
  var subarray = array.slice(i, i + window);
  answer.push(average(subarray));
}

/// 1. 인덱스를 생성하는 작은 단계를 만듦
var indices = [];

for (var i = 0; i < array.length; i++) indices.push(i);
var window = 5;
// 인덱스 배열에 map()을 적용해 반복문 수정
// 각 항목마다 인덱스를 통해 콜백 호출
var answer = map(indices, function (i) {
  // map()에 넘기는 콜백이 두 가지 일을 하고 있음
  // 1. 하위 배열 생성
  var subarray = array.slice(i, i + window);
  // 2. 평균 계산
  return average(subarray);
});

/// 2. 콜백함수를 작은 단계로 나누기

var indices = [];

for (var i = 0; i < array.length; i++) indices.push(i);

var window = 5;

var windows = map(indices, function (i) {
  // 1) 하위 배열 생성
  return array.slice(i, i + window);
});
// 2) 평균 계산
var answer = map(windows, average);

/// 3. 인덱스 배열을 만드는 코드를 빼내 함수로 정의하기
function range(start, end) {
  var ret = [];
  for (var i = start; i < end; i++) ret.push(i);
  return ret;
}

var window = 5;
// 1) 인덱스 배열 생성
var indices = range(0, array.length);
// 2) 하위 배열 생성
var windows = map(indices, function (i) {
  return array.slice(i, i + window);
});
// 3) 평균 계산
var answer = map(windows, average);
