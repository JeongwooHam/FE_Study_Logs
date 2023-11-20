// 배열 항목을 copy-on-write 방식으로 설정하기
// 🤖 Before Modification
a[15] = 2;

// 🤖 After Modification
// 직접 인덱스로 접근해서 수정하는 것이 아니라, 복사본에서 수정 후 해당 값 리턴
function arraySet(array, idx, value) {
  let copy = array.slice();
  copy[idx] = value;
  return copy;
}
