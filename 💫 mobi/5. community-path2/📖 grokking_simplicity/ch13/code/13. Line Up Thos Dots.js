/// ES6

function movingAverage(numbers) {
  return numbers.map((_e, i) => numbers.slice(i, i + window)).map(average);
}

/// Classic JavaScript with Lodash

function movingAverage(numbers) {
  return _.chain(numbers)
    .map((_e, i) => numbers.slice(i, i + window))
    .map(average)
    .value();
}
