function sendIssue_beforeOpt() {
  const coupons = fetchCouponsFromDB();
  const goodCoupons = selectCouponsByRank(coupons, "good");
  const bestCoupons = selectCouponsByRank(coupons, "best");
  // 모든 구독자를 return하므로, 사용자가 증가한다면 문제가 생길 수 있음 (확장성을 고려해야 함!)
  const subscribers = fetchSubscribersFromDB();
  // 일부 구독자만 받아와서 subscribers에 들아가도록 수정이 필요함
  const emails = emailsForSubscribers(subscribers, goodCoupons, bestCoupons);
  for (let e = 0; e < emails.length; e++) {
    const email = emails[e];
    emailSystem.send(email);
  }
}

function sendIssue_afterOpt() {
  let coupons = fetchCouponsFromDB();
  let goodCoupons = selectCouponsByRank(coupons, "good");
  let bestCoupons = selectCouponsByRank(coupons, "best");
  // 0번 페이지부터 시작
  let page = 0;
  let subscribers = fetchSubscribersFromDB(page);
  while (subscribers.length > 0) {
    // 가져올 것이 없을 때까지 실헹되도록 하는 반복문
    let emails = emailsForSubscribers(subscribers, goodCoupons, bestCoupons);
    for (let e = 0; e < emails.length; e++) {
      let email = emails[e];
      emailSystem.send(email);
    }
    page++;
    // 다음 페이지를 가져오기
    subscribers = fetchSubscribersFromDB(page);
  }
}
