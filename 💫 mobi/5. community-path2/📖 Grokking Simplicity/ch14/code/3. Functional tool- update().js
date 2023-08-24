// 객체를 다루는 함수형 도구: update()
// (객체, 바꿀 값의 위치, 바꾸는 동작)
function update(object, key, modify) {
  var value = object[key];
  var newValue = modify(value);
  var newObject = objectSet(object, key, newValue);
  return newObject; // copy-on-write로 바꾼 객체를 리턴
}

function incrementField(item, field) {
  // 객체(장바구니 제품), 바꿀 값의 필드, 바꾸는 함수를 update()에 전달
  return update(item, field, function (value) {
    return value + 1;
  });
}

/// [user 레코드의 사용자 이메일 주소를 소문자로 변환하기]
var user = {
  firstName: "Joe",
  lastName: "Nash",
  email: "JOE@EXAMPLE.COM",
};

update(user, "email", lowercase);

///[제품의 수량을 10배 늘려주기]
var item = {
  name: "shoes",
  price: 7,
  quantity: 2,
};

/// Answer

function tenXQuantity(item) {
  return update(item, "quantity", function (quantity) {
    return quantity * 10;
  });
}
