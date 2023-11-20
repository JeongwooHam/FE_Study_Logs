// 실제 은행 계좌로 송금하는 함수: 액션

// 하함수 안에서 액션을 호출하고 있으므로 함수 전체가 액션이 됨
function figurePayout(affiliate) {
  let owed = affiliate.sales * affiliate.commission;
  // 100달러 이하면 송금 막기
  if (owed > 100)
    // 실제 돈을 송금하는 코드 (호출 시점이나 횟수가 중요: ACTION)
    sendPayout(affiliate.bank_code, owed);
}

function affiliatePayout(affiliates) {
  // figurePayout이 액션이므로, 이를 호출하는 곳도 호출 시점과 횟수에 의존하게 됨
  for (let a = 0; a < affiliates.length; a++) figurePayout(affiliates[a]);
}

function main(affiliates) {
  // 또한 이를 호출하는 부분 또한 호출 시점과 횟수에 의존하게 됨
  affiliatePayout(affiliates);
}

// 🤨 액션을 호출하는 코드 한 줄이 전체 프로그램을 액션으로 만들었음..!
