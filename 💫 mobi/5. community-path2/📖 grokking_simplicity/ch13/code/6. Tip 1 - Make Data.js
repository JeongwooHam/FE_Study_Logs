var answer = [];
var window = 5;

for (var i = 0; i < array.length; i++) {
  var sum = 0;
  var count = 0;
  // w는 0부터 window-1까지 바뀌지만 배열에 들어있는 값은 아님
  for (var w = 0; w < window; w++) {
    // idx는 i부터 i+window-1까지 바뀌지만 배열로 만들지는 않음
    var idx = i + w;
    if (idx < array.length) {
      // 배열에 있는 작은 범위의 값이지만 배열로 따로 만들지 않음
      sum += array[idx];
      count += 1;
    }
  }
  answer.push(sum / count);
}

// AFTER: 안쪽 반복문이 반복하는 범위의 값만 배열로 만들어 반복하기
var answer = [];
var window = 5;

for (var i = 0; i < array.length; i++) {
  var sum = 0;
  var count = 0;
  // 배열의 특정 부분을 하위 배열로 만듦
  var subarray = array.slice(i, i + window);
  // 반복문으로 배열을 반복함
  for (var w = 0; w < subarray.length; w++) {
    sum += subarray[w];
    count += 1;
  }
  answer.push(sum / count);
}
