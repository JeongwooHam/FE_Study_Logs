// 1. 본문과 앞부분, 뒷부분을 확인하기
function arraySet(array, idx, value) {
  // 🔴 앞부분
  let copy = array.slice();
  // 🟢 본문
  copy[idx] = value;
  // 🔵 뒷부분
  return copy;
}

function push(array, elem) {
  // 🔴 앞부분
  let copy = array.slice();
  // 🟢 본문
  copy.push(elem);
  // 🔵 뒷부분
  return copy;
}

function drop_last(array) {
  // 🔴 앞부분
  let array_copy = array.slice();
  // 🟢 본문
  array_copy.pop();
  // 🔵 뒷부분
  return array_copy;
}

function drop_first(array) {
  // 🔴 앞부분
  let array_copy = array.slice();
  // 🟢 본문
  array_copy.shift();
  // 🔵 뒷부분
  return array_copy;
}

/// 2. 함수 빼내기
// idx, value가 withArrayCopy 범위 내에 없으므로 동작하지 않음
function arraySet(array, idx, value) {
  return withArrayCopy(array);
}
// 함수의 핵심(배열 복사)인 앞부분, 뒷부분을 빼서 새로운 함수 생성
function withArrayCopy(array) {
  let copy = array.slice();
  copy[idx] = value; // 인자로 만들어져 전달될 부분
  return copy;
}

/// 3. 콜백 빼내기
function arraySet(array, idx, value) {
  //                          콜백으로 빼냄
  return withArrayCopy(array, function (copy) {
    copy[idx] = value;
  });
}

function arraySet(array, idx, value) {
  return withArrayCopy(array, function (copy) {
    copy[idx] = value;
  });
}

function drop_last(array) {
  return withArrayCopy(array, function (copy) {
    copy.pop();
  });
}

function drop_first(array) {
  return withArrayCopy(array, function (copy) {
    copy.shift();
  });
}

// 카피-온-라이트 원칙을 따르고 재사용할 수 있는
// 기본 연산 뿐만 아니라 배열을 바꾸는 어떠한 동작에서도 사용 가능
//                            콜백
function withArrayCopy(array, modify) {
  let copy = array.slice();
  modify(copy);
  return copy;
}

// 장점1: 카피-온-라이트 원칙을 유지하면서 새로운 정렬 라이브러리를 쉽게 적용할 수 있음
let sortedArray = withArrayCopy(array, function (copy) {
  // 배열을 직접 변경하는 고성능 정렬 함수
  SuperSorter.sort(copy);
});

// 장점2: 동작 최적화에 용이
// 실행할 때마다 새로운 복사본을 생성하므로 느리고 메모리를 많이 씀
let a1 = drop_first(array);
let a2 = push(a1, 10);
let a3 = push(a2, 11);
let a4 = arraySet(a3, 0, 42);

// 복사본을 하나만 생성하고 그것을 네 번 변경함
let a4 = withArrayCopy(array, function (copy) {
  copy.shift();
  copy.push(10);
  copy.push(11);
  copy[0] = 42;
});
