// 🌟 모든 직원이 어떤 포지션에서 경기를 진행할지 결정된 명단 만들기
// 코치에 의해 기록된 적합한 포지션과 역량 배열
// 코치가 정리한 데이터는 이미 높은 점수순으로 정렬되어 있음
var evaluations = [
  { name: "Jane", position: "catcher", score: 25 },
  { name: "John", position: "pitcher", score: 10 },
  { name: "Harry", position: "pitcher", score: 3 },
];

var roster = { pitcher: "John", catcher: "Jane", "first base": "Ellen" };

/// AFTER: 포지션별로 가장 높은 사람을 골라 명단을 완성하기
var roster = reduce(evaluations, {}, function (roster, eval) {
  var position = eval.position;
  if (roster[position])
    // already filled the position
    return roster; // so do nothing
  return objectSet(roster, position, eval.name);
});

// 🌟 개인에게 적합한 포지션이 무엇인지 알려주는 함수 만들기
var employeeNames = ["John", "Harry", "Jane"];

// AFTER: 직원 이름 명단을 모든 직원의 추천 포지션 레코드로 수정
// recommendPosition() 함수에 직원 이름을 넣으면 분석 로직이 실행되어 추천 결과가 반환됨
var recommendations = map(employeeNames, function (name) {
  return {
    name: name,
    position: recommendPosition(name),
  };
});

// 🌟 추천된 포지션에서 가장 잘 하는 선수 찾는 함수 만들기
var recommendations = [
  { name: "Jane", position: "catcher" },
  { name: "John", position: "pitcher" },
];

/// AFTER: 추천 레코드 목록을 인자로 넘겨 평점 목록으로 수정
// scorePlayer() 함수에 직원 이름과 추천 포지션을 넘기면 숫자로 된 점수를 리턴함
var evaluations = map(recommendations, function (rec) {
  return objectSet(rec, "score", scorePlayer(rec.name, rec.position));
});
