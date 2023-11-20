// lodash 없이 JS로만 구현한 깊은 복사
function deepCopy(thing) {
  // 1. 값이 배열인지 확인
  if (Array.isArray(thing)) {
    // 2-1. 배열이라면, 빈 배열 생성
    let copy = [];
    // 2-2. 해당 배열을 반복하면서 각 요소에 대해 deepCopy 함수 호출하여 변환
    // 2-3. 빈 배열에 추가
    for (let i = 0; i < thing.length; i++) copy.push(deepCopy(thing[i]));
    // 2-4. 모든 배열 요소가 복사되면 copy 배열 반환
    return copy;
    // 3.값이 null인 경우 그대로 null 반환
  } else if (thing === null) {
    return null;
    // 4. 값이 객체인 경우 각각의 속성에 대해 재귀적으로 deepCopy 함수를 호출하여 변환
  } else if (typeof thing === "object") {
    let copy = {};
    let keys = Object.keys(thing);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      copy[key] = deepCopy(thing[key]);
    }
    return copy;
    // 5. 값이 객체도 아니고 배열도 아닌 기본 데이터 타입이라면 그대로 값 반환
  } else {
    return thing;
  }
}
/* 
다양한 타입의 값이 중첩되어 있을 때 깊은 복사를 수행함으로써
원본 데이터에 영향을 끼치지 않는 새로운 값을 생성하여 반환함
*/
