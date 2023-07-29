// 1. shift 메서드의 읽기 동작 분리 (계산)
// 배열을 바꾸지 않으므로 copy-on-write 적용할 필요 없음!
function first_element(array) {
  // 배열의 첫 번째 항목 return (비었다면 undefined)
  return array[0];
}

// 2. shift 메서드가 쓰기 동작만 실행하도록 분리
function drop_first(array) {
  // shift 메서드가 하는 일을 감싸기만 하면 되므로 return 값 무시!
  array.shift();
}

// 🤖 After Modification
function drop_first(array) {
  let array_copy = array.slice();
  array_copy.shift();
  return array_copy;
}

// 💫 보일러 플레이트 코드를 줄이기 위해 기본적 배열/객체 동작에 대해 copy-on-write 버전을 만들어두면 좋음
