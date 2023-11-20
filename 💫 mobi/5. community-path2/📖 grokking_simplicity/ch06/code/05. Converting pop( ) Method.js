// 🤖 Before Modification
let a = [1, 2, 3, 4];
let b = a.pop();
console.log(b); // 4
console.log(a); // [1, 2, 3]

// 🤖 After Modification
// 1. 읽기 함수와 쓰기 함수로 분리하기
// 1) 읽기
function last_element(array) {
  return array[array.length - 1];
}
// 2) 쓰기
function drop_last(array) {
  array.pop();
}

// 읽기 함수는 값을 변경하지 않으므로 그냥 두고, 쓰기 함수만 copy-on-write 적용
function drop_last(array) {
  let array_copy = array.slice();
  array_copy.pop();
  return array_copy;
}

// 2. 값 두 개를 리턴하는 함수로 만들기
// 1) 값을 변경하는 함수를 감싸줌
function pop(array) {
  return array.pop();
}
// copy-on-write 적용
function pop(array) {
  let array_copy = array.slice();
  let first = array_copy.pop();
  return {
    first: first,
    array: array_copy,
  };
}
