// JustOnce( )
// 함수를 호출할 때마다 메시지가 전송된다.
function sendAddToCartText(number) {
  sendTextAjax(
    number,
    "Thanks for adding something to your cart. Reply if you have any questions!"
  );
}

// action: 액션 전달
function JustOnce(action) {
  // 함수의 실행 여부를 기록하는 변수
  var alreadyCalled = false;
  return (a, b, c) => {
    // 실행한 적이 있는 경우 바로 종료한다.
    if (alreadyCalled) return;
    // 함수가 실행됐다고 생각하고 실행한 사실을 기록한다.
    alreadyCalled = true;
    // 인자와 함께 액션을 호출한다.
    return action(a, b, c);
  };
}

// 첫 번째 실행 시에만 메시지를 보낼 수 있는 함수 생성
const sendAddToCartTextOnce = JustOnce(sendAddToCartText);

sendAddToCartTextOnce("555-555-5555-55");
sendAddToCartTextOnce("555-555-5555-55");
sendAddToCartTextOnce("555-555-5555-55");
sendAddToCartTextOnce("555-555-5555-55");

/*
📢 JustOnce()에서도 타임라인 간 변수 공유가 가능하다.
- 비동기 코드가 아니므로 안전하다.
*/
