// 🌟 모든 직원 이름이 포함된 명단을 하나의 체인으로 엮어 최종 명단 만들기

let employeeNames = ["John", "Harry", "Jane"];

// sortBy (array, f)
// array 배열을 받아 f가 리턴한 값을 우선순위로 정렬한 복사본 배열을 리턴한다.
// 점수로 정렬하기 위해 필요하다.

// reverse(array)
// array 배열을 받아 역순으로 정렬된 복사본 배열을 리턴한다.

let recommendations = map(employeeNames, function (name) {
  return {
    name: name,
    position: recommendPosition(name),
  };
});

let evaluations = map(recommendations, (rec) =>
  objectSet(rec, "score", scorePlayer(rec.name, rec.position))
);

let evaluationsAscending = sortBy(evaluations, (eval) => eval.score);

let evaluationsDescending = reverse(evaluationsAscending);

let roster = reduce(evaluations, {}, (roster, eval) => {
  let position = eval.position;
  if (roster[position])
    // 이미 position이 결정되었으므로
    return roster; // 그대로 반환
  return objectSet(roster, position, eval.name);
});
