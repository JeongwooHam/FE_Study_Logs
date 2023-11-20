// reduce() 예제: 아무것도 구입하지 않은 고객 구하기

// 가진 것: 문자열 배열
// 필요한 것: 배열에 있는 모든 문장ㄹ을 하나로 합친 문자열
// 함수: 누적된 문자열과 배열에 있는 현재 문자열을 받아서 합치는 함수

// strings: 문자열 배열을 합쳐서 누적함
// "": 초기값은 빈 문자열
// function: 합치는 일을 하는 함수 전달
reduce(strings, "", function (accum, string) {
  // 배열의 모든 문자열을 합친 문자열 하나를 리턴
  return accum + string;
});

// 숫자리스트를 모두 더하는 reduce()
function sum(numbers) {
  return reduce(numbers, 0, function (total, num) {
    return total + num;
  });
}
// 숫자리스트를 모두 곱하는 reduce()
function product(numbers) {
  return reduce(numbers, 1, function (total, num) {
    return total * num;
  });
}
// Math.min() 없이 배열에서 가장 작은 숫자를 리턴
// 배열에서 가장 작은 숫자를 리턴하되 빈 배열이라면 Number~ 리턴 ...?
function min(numbers) {
  // Number.MAX_VALUE: JS에서 가장 큰 숫자
  return reduce(numbers, Number.MAX_VALUE, function (m, n) {
    if (m < n) return m;
    else return n;
  });
}
// Math.max() 없이 배열에서 가장 큰 숫자를 리턴
// 배열에서 가장 큰 숫자를 리턴하되 빈 배열이라면 Number~ 리턴 ...?
function max(numbers) {
  // Number.MIN_VALUE: JS에서 가장 작은 숫자
  return reduce(numbers, Number.MIN_VALUE, function (m, n) {
    if (m > n) return m;
    else return n;
  });
}
