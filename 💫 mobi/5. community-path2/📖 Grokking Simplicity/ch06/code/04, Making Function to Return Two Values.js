// 1. 동작을 감싸기
function shift(array) {
  // return 값 무시하지 않도록 주의!
  return array.shift();
}

// 2-1. 읽기 함수로 바꾸기
function shift(array) {
  // 1) 인자 복사
  let array_copy = array.slice();
  // 2) 복사한 값의 첫 번째 항목을 지움
  let first = array_copy.shift();
  // 3) 지운 첫 번째 항목과 변경된 배열을 함께 반환
  return {
    first: first,
    array: array_copy,
  };
}

// 2-2. 두 값을 각체로 조합하기 (게산)
function shift(array) {
  return {
    first: first_element(array), // 계산
    array: drop_first(array), // 계산
  };
}
