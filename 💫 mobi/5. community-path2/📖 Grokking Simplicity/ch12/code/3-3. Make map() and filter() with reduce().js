/* 
[🚨 주의사항]
1. 변이함수를 넘기는 경우 계산이라는 규칙을 어길 수 있다.
2. 변이가 지역적으로 일어난다면 계산이라는 규칙이 유지된다.
   - 지역값을 바꾸더라도 리턴한 후에는 바꾸지 않기 때문에 여전히 계산!
*/

// 1) 각 단계에서 리턴하는 누적값 바꾸지 않기
function map(array, f) {
  return reduce(array, [], function (ret, item) {
    // 불변함수 사용 (비효율적)
    return ret.concat([f(item)]);
  });
}

function filter(array, f) {
  return reduce(array, [], function (ret, item) {
    // 불변 함수 사용 (비효율적)
    if (f(item)) return ret.concat([item]);
    else return ret;
  });
}

// 2) 각 단계에서 리턴하는 누적값 바꾸기
function map(array, f) {
  return reduce(array, [], function (ret, item) {
    // 변이 함수 사용 (조금 더 효율적)
    ret.push(item);
    return ret;
  });
}

function filter(array, f) {
  return reduce(array, [], function (ret, item) {
    // 변이 함수 사용 (조금 더 효율적)
    if (f(item)) ret.push(item);
    return ret;
  });
}
