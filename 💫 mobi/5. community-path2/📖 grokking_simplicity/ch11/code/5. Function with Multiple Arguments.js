// Q1. 인자가 여러 개인 함수를 받으려면 어떻게 해야 할까?
// Q2. 안쪽에 있는 함수에서 리턴값을 어떻게 전달할 수 있을까?
function wrapLogging(f) {
  // A2. JS 함수는 인자 개수가 유연해서 전달하는 인자의 개수는 상관 없음
  // ES6 문법부터는 rest arguments와  spread operator 사용 가능 ({...rest})
  return function (a1, a2, a3, a4, a5, a6, a7, a8, a9) {
    try {
      // A1. 안쪽 함수에서 return 키워드를 통해 간단하게 리턴값 전달 가능
      return f(a1, a2, a3, a4, a5, a6, a7, a8, a9);
    } catch (error) {
      logToSnapErrors(error);
    }
  };
}
