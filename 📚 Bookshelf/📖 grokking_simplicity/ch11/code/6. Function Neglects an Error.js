/// 예외 발생 시 에러를 무시하는 함수

try {
  codeThatMightThrow();
} catch (e) {
  // ignore errors by doing nothing
}

/// Answer

function wrapIgnoreErrors(f) {
  return function (a1, a2, a3) {
    try {
      return f(a1, a2, a3);
    } catch (error) {
      // 일반적으로 try catch의 catch 구문에서 아무것도 하지 않으면 에러 무시
      // 에러 발생 시 null을 리턴함으로써 에러 무시
      return null;
    }
  };
}
