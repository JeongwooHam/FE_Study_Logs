// 구독자: 데이터
// 테이블의 행은 JS 객체로 표현 가능
const subscriber = {
  email: "sam@pmail.com",
  rec_count: 16,
};

// 쿠폰 등급: 데이터
const rank1 = "best";
const rank2 = "good";
const rank3 = "bad";

// 쿠폰 등급 결정하기: 계산
// 입력값(subsriber), 출력값은 return 값
function subCouponRank(subscriber) {
  // 계산 부분
  if (subscriber.rec_count >= 10) return "best";
  else return "good";
}

// 쿠폰 목록: 데이터
const coupon = [
  {
    code: "10PERCENT",
    rank: "bad",
  },
  {
    code: "MAYDISCOUNT",
    rank: "good",
  },
  {
    code: "PROMOTION45",
    rank: "best",
  },
  {
    code: "IHEARTYOU",
    rank: "bad",
  },
  {
    code: "GETADEAL",
    rank: "best",
  },
  {
    code: "ILIKEDISCOUNTS",
    rank: "good",
  },
];

// 특정 등급의 쿠폰 목록 선택: 계산 (coupons, rank의 값이 같으면 항상 같은 return 값 반환. 호출 시 외부에 영향을 미치지 않음)
// 입력값: 전체 쿠폰 목록, 선택할 등급
function selectCouponsByRank(coupons, rank) {
  const ret = []; // 빈 배열로 초기화
  for (let c = 0; c < coupons.length; c++) {
    // 모든 쿠폰에 대해 반복
    const coupon = coupons[c];
    if (coupon.rank === rank) ret.push(coupon.code); // 현재 쿠폰이 주어진 등급과 일치하면 배열에 삽입
  }
  // 출력값: 선택한 등급을 가진 쿠폰 목록
  return ret;
}

// 이메일 본문: 데이터
const message = {
  from: "newsconstter@coupondog.co",
  to: "sam@pmail.com",
  subject: "Your weekly coupons inside",
  body: "Here are your coupons ...",
};

// 구독자가 받을 이메일 계획: 계산
// 구독자가 받을 쿠폰이 goods/bests 중 무엇일지 미리 알 수 없으므로 둘 다 입력값으로 받아와야 함
function emailForSubscriber(subscriber, goods, bests) {
  const rank = subCouponRank(subscriber);
  if (rank === "best")
    // 등급 결정하기
    return {
      from: "newsconstter@coupondog.co",
      to: subscriber.email,
      subject: "Your best weekly coupons inside",
      body: "Here are the best coupons: " + bests.join(", "),
    };
  // rank === "good"
  else
    return {
      from: "newsconstter@coupondog.co",
      to: subscriber.email,
      subject: "Your good weekly coupons inside",
      body: "Here are the good coupons: " + goods.join(", "),
    };
} // return 값은 이메일 본문

// 구독자 목록으로 전체 이메일 목록 만들기: 계산
function emailsForSubscribers(subscribers, goods, bests) {
  const emails = [];
  for (let s = 0; s < subscribers.length; s++) {
    const subscriber = subscribers[s];
    const email = emailForSubscriber(subscriber, goods, bests);
    emails.push(email);
  }
  // map으로 코드 개선하려면?
  // const emails = subscriber.map((el) => emailForSubscriber(el))
  return emails;
}

// 이메일 보내기: 액션
function sendIssue() {
  const coupons = fetchCouponsFromDB();
  const goodCoupons = selectCouponsByRank(coupons, "good");
  const bestCoupons = selectCouponsByRank(coupons, "best");
  const subscribers = fetchSubscribersFromDB();
  const emails = emailsForSubscribers(subscribers, goodCoupons, bestCoupons);
  for (let e = 0; e < emails.length; e++) {
    const email = emails[e];
    emailSystem.send(email);
  }
}
