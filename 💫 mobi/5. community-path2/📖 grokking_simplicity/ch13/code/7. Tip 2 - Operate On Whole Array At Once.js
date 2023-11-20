var answer = [];
var window = 5;

// BEFORE: 하위 배열 항목의 합과 개수를 구한 다음 나눔
for (var i = 0; i < array.length; i++) {
  var sum = 0;
  var count = 0;
  var subarray = array.slice(i, i + window);
  // 하위 배열을 반복하는 반복문
  for (var w = 0; w < subarray.length; w++) {
    // 하위 배열의 합과 개수를 구함
    sum += subarray[w];
    count += 1;
  }
  // 평균을 구하기 위해 나눔
  answer.push(sum / count);
}

/// AFTER
var answer = [];
var window = 5;
// 본문에서 배열에 있는 항목을 사용하지 않고 인덱스 사용
for (var i = 0; i < array.length; i++) {
  // 안쪽 반복문 전체를 slice()와 average()를 호출하는 코드로 수정
  var subarray = array.slice(i, i + window);
  answer.push(average(subarray));
}

// 🌟 전체 항목을 반복하므로 map()을 사용하기 좋아보임
/*
⚠️ 하지만
- 반복문에서 배열 항목을 바로 사용하지 않고 배열의 인덱스 값을 사용하고 있으므로 map() 바로 적용 불가 
> map()은 콜백함수에 현재 항목을 전달하기 때문
*/
