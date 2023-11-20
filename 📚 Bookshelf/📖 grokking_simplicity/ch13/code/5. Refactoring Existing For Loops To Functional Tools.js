// 반복문 안에서 결과가 완성되는 배열
let answer = [];
let window = 5;

// 바깥쪽 배열은 배열 개수만큼 반복함
for (let i = 0; i < array.length; i++) {
  let sum = 0;
  let count = 0;
  // 안쪽 배열은 0에서 4까지 작은 구간을 반복함
  for (let w = 0; w < window; w++) {
    // 새로운 인덱스를 계산함
    let idx = i + w;
    // 특정 값을 누적함
    if (idx < array.length) {
      sum += array[idx];
      count += 1;
    }
  }
  // answer 배열에 값을 추가함
  answer.push(sum / count);
}

/*
[🌟 HINT]
- 원래 배열 크기만큼 answer이라는 새로운 배열에 항목을 추가하고 있음 > 바깥쪽 배열에 map 사용 가능
- 배열을 돌면서 항목을 값 하나로 만들고 있음 > 안쪽 배열에는 reduce를 사용하기 좋음
*/
