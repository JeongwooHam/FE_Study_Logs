/// [nestedUpdate() 도출하기]
// updateX()를 만들려고 한다면 update()안에 updateX-1()을 호출하면 됨
// update()는 첫 번째 키만 사용하고 나머지 키와 modify 함수는 updateX-1()에서 사용!

function update4(object, key1, key2, key3, key4, modify) {
  return update(object, key1, function (value1) {
    return update3(value1, key2, key3, key4, modify);
  });
}

// 키를 두 개 사용하고 update1()을 호출한다.
function update2(object, key1, key2, modify) {
  return update(object, key1, function (value1) {
    return update1(value1, key2, modify);
  });
}

// 키를 한 개 사용하고 update0()을 호출한다.
function update1(object, key1, modify) {
  return update(object, key1, function (value1) {
    return update0(value1, modify);
  });
}

// ⚠️ update0()은 위의 함수들과 다르다!
// 1. 사용하는 키가 없기 때문에 키가 한 개 필요한 update()를 호출할 수 없다.
// 2. X-1이 -1이 되므로 경로 길이를 표현할 수 없다.
// ➡️ 직관적으로 중첩되지 않은 객체를 의미한다는 것을 알 수 있음 (조회, 설정 없이 값만 변경하는 함수)
// 찾으려고 하는 value만 있으면 modify()를 그냥 호출함
function update0(value, modify) {
  return modify(value);
}

// 어떻게 암묵적 인자를 드러내기 리팩터링을 할 수 있을까?
// 3 ➡️ X
// key1, key2, key3 ➡️ X만큼의 키
function update3(object, key1, key2, key3, modify) {
  return update(object, key1, function (value1) {
    // 2 ➡️ X - 1
    // key2, key3 ➡️ 첫 번째 키는 제외됨
    return update2(value1, key2, key3, modify);
  });
}

/// Page 374
// 🌟 depth라는 명시적 인자가 추가됨
// depth 개수 만큼의 key
function updateX(object, depth, key1, key2, key3, modify) {
  // 동작하지 않는 함수
  return update(object, key1, function (value1) {
    // 재귀호출 ➡️ depth - 1과 하나 작은 수 만큼의 key 전달
    return updateX(value1, depth - 1, key2, key3, modify);
  });
}
// 🤔 여기서 depth와 실제 key 개수를 어떻게 맞출 수 있을까?
// 👩‍🏫 key의 개수와 순서가 중요하다는 점을 참고합시다! ➡️ 배열 자료 구조 필요!

//// 🤖 AFTER!
// keys ➡️ 모든 키를 배열로 넘김. depth 인자는 배열의 길이가 됨!
function updateX(object, keys, modify) {
  var key1 = keys[0]; // 첫 번째 키로 update() 호출
  var restOfKeys = drop_first(keys); // 나머지 키로 재귀 함수 호출
  return update(object, key1, function (value1) {
    return updateX(value1, restOfKeys, modify);
  });
}

/// [update0() 빼내기]
function updateX(object, keys, modify) {
  // key가 없는 경우 ➡️ update()를 호출하지 않고 콜백함수인 modify()만 바로 호출! (재귀 호출 X)
  if (keys.length === 0) return modify(object);
  var key1 = keys[0];
  var restOfKeys = drop_first(keys);
  return update(object, key1, function (value1) {
    // key가 있는 경우 재귀 호출
    return updateX(value1, restOfKeys, modify);
  });
}

/// updateX() ➡️ nestedUpdate()
// 0을 포함해 중첨된 깊이에 상관없이 사용할 수 있는 함수
// 객체, 중첩된 객체의 값을 가리키는 키 경로, 바꿀 함수를 인자로 받음
function nestedUpdate(object, keys, modify) {
  // 데이터가 중첩되지 않았다면 바로 변경 동작 수행
  // 🌟 종료조건: 경로의 길이가 0일 때
  if (keys.length === 0) return modify(object);
  var key1 = keys[0];
  var restOfKeys = drop_first(keys); // 항목을 하나씩 없애 종료 조건에 가까워지게 함
  // 빠져나오는 모든 경로에 있는 객체의 복사본 생성
  return update(object, key1, function (value1) {
    return nestedUpdate(value1, restOfKeys, modify);
  });
}

// 🌟 incrementSizeByName()을 nestedUpdate()를 사용하여 리팩토링 해보기
const incrementSizeByName = (cart, name) => {
  return nestedUpdate(cart, [name, "options", "size"], (size) => size + 1);
};
