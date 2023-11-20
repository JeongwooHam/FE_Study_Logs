/// Before
// price: 암묵적 인자
function setPriceByName(cart, name, price) {
  let item = cart[name];
  let newItem = objectSet(item, "price", price);
  let newCart = objectSet(cart, name, newItem);
  return newCart;
}

cart = setPriceByName(cart, "shoe", 13);
cart = setQuantityByName(cart, "shoe", 3);
cart = setShippingByName(cart, "shoe", 0);
cart = setTaxByName(cart, "shoe", 2.34);

/// After
// field라는 명시적 인자 추가
// price라는 인자를 더 일반적인 이름인 value로 수정
function setFieldByName(cart, name, field, value) {
  let item = cart[name];
  // 새로운 인자 사용
  let newItem = objectSet(item, field, value);
  let newCart = objectSet(cart, name, newItem);
  return newCart;
}
// 호출 부분 수정
// prettier로 수정되었지만 값에는 큰따옴표, 키에는 작은따옴표 사용
cart = setFieldByName(cart, "shoe", "price", 13);
cart = setFieldByName(cart, "shoe", "quantity", 3);
cart = setFieldByName(cart, "shoe", "shipping", 0);
cart = setFieldByName(cart, "shoe", "tax", 2.34);
