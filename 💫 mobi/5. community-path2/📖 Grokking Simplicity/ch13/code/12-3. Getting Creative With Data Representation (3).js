// Page 347 It's your turn

let employeeNames = ["John", "Harry", "Jane"];

// Page 348 Answer

let recommendations = map(employeeNames, function (name) {
  return {
    name: name,
    position: recommendPosition(name),
  };
});

let evaluations = map(recommendations, function (rec) {
  return objectSet(rec, "score", scorePlayer(rec.name, rec.position));
});

let evaluationsAscending = sortBy(evaluations, function (eval) {
  return eval.score;
});

let evaluationsDescending = reverse(evaluationsAscending);

let roster = reduce(evaluations, {}, function (roster, eval) {
  let position = eval.position;
  if (roster[position])
    // already filled the position
    return roster; // so do nothing
  return objectSet(roster, position, eval.name);
});
