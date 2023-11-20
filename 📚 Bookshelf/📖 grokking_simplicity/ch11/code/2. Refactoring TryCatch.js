// try 부분에서 받을 본문과 catch 부분에서 받을 본문을 따로 받기
tryCatch(sendEmail, logToSnapErrors);

try {
  sendEmail();
} catch (error) {
  logToSnapErrors(error);
}

function tryCatch(f, errorHandler) {
  try {
    return f();
  } catch (error) {
    return errorHandler(error);
  }
}
