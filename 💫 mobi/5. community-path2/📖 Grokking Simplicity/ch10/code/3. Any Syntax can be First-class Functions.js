// + 연산자를 일급 값으로 만든 코드 (함수는 일급 값)
function plus(a, b) {
  return a + b;
}

/// 다른 연산자도 일급 값으로 바꾸기

function times(a, b) {
  return a * b;
}

function dividedBy(a, b) {
  return a / b;
}

function minus(a, b) {
  return a - b;
}
