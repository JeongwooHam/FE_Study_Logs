/// [update3() 도출하기]

function incrementSizeByName(cart, name) {
  // ============================================================ 암묵적 인자
  return update(cart, name, function (item) {
    return update2(item, "options", "size", function (size) {
      // ============================================================
      return size + 1;
    });
  });
}

/// update3()으로 빼냄
function incrementSizeByName(cart, name) {
  // 경로가 세 개!
  return update3(cart, name, "options", "size", function (size) {
    return size + 1;
  });
}

// update 안에서 update2를 호출하는 함수
// 두 단계 + 1
function update3(object, key1, key2, key3, modify) {
  return update(object, key1, function (object2) {
    return update2(object2, key2, key3, modify);
  });
}

/// 👩‍🏫 update4()와 update5()도 만들 수 있습니다!
function update4(object, k1, k2, k3, k4, modify) {
  return update(object, k1, function (object2) {
    return update3(object2, k2, k3, k4, modify);
  });
}

function update5(object, k1, k2, k3, k4, k5, modify) {
  return update(object, k1, function (object2) {
    return update4(object2, k2, k3, k4, k5, modify);
  });
}
