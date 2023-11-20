/// 다른 숫자에 어떤 숫자를 더하는 함수 만들기
//                        n
let increment = makeAdder(1);
let plus10 = makeAdder(10);

/// Answer

function makeAdder(n) {
  return function (x) {
    return n + x;
  };
}

// 사용 방법
//         x
increment(15); // 1 + 15 = 16
plus10(15); // 10 + 15 = 25
