// 제품 이미지를 새로운 DB로 마이그레이션하는 과정에 사용하는 코드 ➡️ 인터렉션 계층에 속하는 코드!
var image = newImageDB.getImage("123");
if (image === undefined) image = oldImageDB.getImage("123");

// 웹 요청 실패 시 재시도를 하는 로직 ➡️ 인터렉션 계층에 속하는 코드
// 도메인 용어를 쓰지 않으므로 비즈니스에 중요하더라도 비즈니스 규칙이 아니다.
function getWithRetries(url, retriesLeft, success, error) {
  if (retriesLeft <= 0) error("No more retries");
  ajaxGet(url, success, function (e) {
    getWithRetries(url, retriesLeft - 1, success, error);
  });
}
