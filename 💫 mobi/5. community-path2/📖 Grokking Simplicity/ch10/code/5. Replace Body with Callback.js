// 1. 같은 형태로 try/catch 구문을 활용함을 확인하기
try {
  saveUserData(user);
} catch (error) {
  logToSnapErrors(error);
}

try {
  fetchProduct(productId);
} catch (error) {
  logToSnapErrors(error);
}

// 2. 함수로 빼내기

function withLogging() {
  try {
    saveUserData(user);
  } catch (error) {
    logToSnapErrors(error);
  }
}
// 이제 기명함수가 되어 이름으로 호출 가능해짐
withLogging();

/// 3. 앞뒤 사이에 있는 본문을 인자로 빼내기
// saveUserData(user) 부분을 콜백으로 빼냄
// f: 함수
function withLogging(f) {
  try {
    // 원래 본문이 있던 곳에서 인자로 받은 함수 호출
    f();
  } catch (error) {
    logToSnapErrors(error);
  }
}
// 본문 전달 (한 줄짜리 익명 함수)
withLogging(function () {
  saveUserData(user);
});
