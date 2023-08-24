// [incrementSizeByName()을 만드는 네 가지 방법]
// 🧐 만약 객체가 세 번 중첩된 형태라면?

/// 🌟 Option 1: update()와 incrementSize()로 만들기
// 장바구니 안의 중첩된 제품을 다루기 위한 함수
function incrementSizeByName(cart, name) {
  return update(cart, name, incrementSize);
}

/// 🌟Option 2: update()와 update2()로 만들기
function incrementSizeByName(cart, name) {
  return update(cart, name, (item) =>
    // update 안에 update2를 사용하여 incrementSize를 인라인으로 구현함
    update2(item, "options", "size", (size) => size + 1)
  );
}

/// 🌟 Option 3: update()로 만들기
// 두 번 중첩된 update()를 사용하여 update2를 인라인으로 만들 수 있음
function incrementSizeByName(cart, name) {
  return update(cart, name, function (item) {
    return update(item, "options", function (options) {
      // update2를 사용하는 대신 update를 한 번 더 호출하여 인라인으로 구현함
      return update(options, "size", function (size) {
        return size + 1;
      });
    });
  });
}

///🌟 Option 4: 조회학 바꾸고 설정하는 것을 직접 만들기
function incrementSizeByName(cart, name) {
  var item = cart[name]; // 조회1
  var options = item.options; // 조회2
  var size = options.size; // 조회3
  var newSize = size + 1; // 변경
  var newOptions = objectSet(options, "size", newSize); // 설정1
  var newItem = objectSet(item, "options", newOptions); // 설정2
  var newCart = objectSet(cart, name, newItem); // 설정3
  return newCart;
}
