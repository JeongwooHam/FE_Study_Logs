/// It's your turn

var evaluations = [
  { name: "Jane", position: "catcher", score: 25 },
  { name: "John", position: "pitcher", score: 10 },
  { name: "Harry", position: "pitcher", score: 3 },
];

var roster = { pitcher: "John", catcher: "Jane", "first base": "Ellen" };

/// Answer

var roster = reduce(evaluations, {}, function (roster, eval) {
  var position = eval.position;
  if (roster[position])
    // already filled the position
    return roster; // so do nothing
  return objectSet(roster, position, eval.name);
});

/// It's your turn

var employeeNames = ["John", "Harry", "Jane"];

/// Answer

var recommendations = map(employeeNames, function (name) {
  return {
    name: name,
    position: recommendPosition(name),
  };
});

/// It's your turn

var recommendations = [
  { name: "Jane", position: "catcher" },
  { name: "John", position: "pitcher" },
];

/// Answer

var evaluations = map(recommendations, function (rec) {
  return objectSet(rec, "score", scorePlayer(rec.name, rec.position));
});
