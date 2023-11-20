// 아래 네 개의 함수들은 objectSet에 들어가는 문자열만 다름
// 함수의 이름에 문자열이 그대로 들어가있음
// =========================================================
function setPriceByName(cart, name, price) {
  let item = cart[name];
  let newItem = objectSet(item, "price", price);
  let newCart = objectSet(cart, name, newItem);
  return newCart;
}

function setShippingByName(cart, name, ship) {
  let item = cart[name];
  let newItem = objectSet(item, "shipping", ship);
  let newCart = objectSet(cart, name, newItem);
  return newCart;
}

function setQuantityByName(cart, name, quant) {
  let item = cart[name];
  let newItem = objectSet(item, "quantity", quant);
  let newCart = objectSet(cart, name, newItem);
  return newCart;
}

function setTaxByName(cart, name, tax) {
  let item = cart[name];
  let newItem = objectSet(item, "tax", tax);
  let newCart = objectSet(cart, name, newItem);
  return newCart;
}
// =========================================================

function objectSet(object, key, value) {
  let copy = Object.assign({}, object);
  copy[key] = value;
  return copy;
}
