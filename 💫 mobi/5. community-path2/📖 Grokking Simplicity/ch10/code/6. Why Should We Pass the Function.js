// try/catch에 함수 대신 일반적인 데이터를 인자로 전달했다면?
// data: 함수 자체를 전달하는 대신 함수의 결과값을 전달
function withLogging(data) {
  try {
    data;
  } catch (error) {
    logToSnapErrors(error);
  }
}
// 함수는 try/catch 문맥 밖에서 호출
withLogging(saveUserData(user));

// 이 경우 saveUserData에서 에러가 발생하면 catch를 통해 에러 핸들링 불가능!
// 즉, 함수 안에 있는 코드가 특정한 문맥 안에서 실행되어야 하기 때문에 함수로 전달하는 것
