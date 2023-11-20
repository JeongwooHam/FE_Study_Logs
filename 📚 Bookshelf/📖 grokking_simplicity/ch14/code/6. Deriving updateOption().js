// [updateOption() 도출하기]

// update를 두 번 부르고 데이터가 두 단계로 중첩되어 있음
function incrementSize(item) {
  return update(item, "options", function (options) {
    // 함수 이름에 있는 암묵적 인자를 본문에서 두 번 사용 (size, increment)
    return update(options, "size", increment);
  });
}

///size ➡️ option
function incrementOption(item, option) {
  return update(item, "options", function (options) {
    return update(options, option, increment);
  });
}

/// increment ➡️ update
function updateOption(item, option, modify) {
  // ⚠️ 여전히 함수 이름에 있는 'option'을 본문에서 참조하고 있음
  return update(item, "options", function (options) {
    return update(options, option, modify);
  });
}

// ➡️ 제품(객체), 옵션명, 옵션을 바꾸는 함수를 인자로 받음