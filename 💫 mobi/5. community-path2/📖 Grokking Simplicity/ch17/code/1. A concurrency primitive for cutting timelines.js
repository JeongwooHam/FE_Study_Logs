// [타임라인을 나누기 위한 동시성 기본형]

// num: 기다릴 타임라인의 수
// callback: 모든 것이 끝났을 때 실행할 콜백
function Cut(num, callback) {
  // num_finished: 카운터
  var num_finished = 0;
  // 리턴값인 함수는 타임라인이 끝났을 때 호출
  return function () {
    // 함수를 호출할 때마다 카운터 증가
    num_finished += 1;
    // callback: 마지막 타임라인이 끝났을 떄 콜백 호출
    if (num_finished === num) callback();
  };
}

// done() 함수가 세 번 호출될 때까지 기다렸다가 메시지 출력
var done = Cut(3, function () {
  console.log("3 timelines are finished");
});

done();
done();
done();
