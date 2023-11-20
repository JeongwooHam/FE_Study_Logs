// [서로 다른 계산대에서 돈을 세는 코드]
// original
var sum = 0;

function countRegister(registerid) {
  var temp = sum;
  registerTotalAjax(registerid, function (money) {
    sum = temp + money;
  });
}

countRegister(1);
countRegister(2);

/*
                          계산대 1          계산대 2
sum 읽기
registerTotalAjax()
sum 읽기
registerTotalAjax()
--------------------------------------------------------------------
                          sum 쓰기          sum 쓰기

📢 실행 가능한 결과 분석하기
- 동시에: 불가능
- 계산대 1 먼저: 잘못된 결과
- 계산대 2 먼저: 잘못된 결과
⚠️ 모두 잘못된 결과만 나옵니다!
*/

// 👩‍🏫 sum을 설정하는 곳을 바꿔봅시다!
var sum = 0;

function countRegister(registerid) {
  registerTotalAjax(registerid, function (money) {
    sum += money;
  });
}

countRegister(1);
countRegister(2);

/*
                          계산대 1          계산대 2
registerTotalAjax()
registerTotalAjax()
--------------------------------------------------------------------
                          sum 읽기          sum 읽기
                          sum 쓰기          sum 쓰기

📢 실행 가능한 결과 분석하기
- 동시에: 불가능
- 계산대 1 먼저: 기대한 결과
- 계산대 2 먼저: 기대한 결과
*/
