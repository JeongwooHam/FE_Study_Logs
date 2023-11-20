/// 🔎 배열로 만든 장바구니

function add_item(cart, item) {
  return add_element_last(cart, item);
}

function calc_total(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    let item = cart[i];
    total += item.price;
  }
  return total;
}

function setPriceByName(cart, name, price) {
  let cartCopy = cart.slice();
  for (let i = 0; i < cartCopy.length; i++) {
    if (cartCopy[i].name === name) cartCopy[i] = setPrice(cartCopy[i], price);
  }
  return cartCopy;
}

function remove_item_by_name(cart, name) {
  let idx = indexOfItem(cart, name);
  if (idx !== null) return splice(cart, idx, 1);
  return cart;
}

// 배열 순회 검사를 하지 않게 될 것이므로 삭제될 함수
function indexOfItem(cart, name) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].name === name) return i;
  }
  return null;
}

function isInCart(cart, name) {
  return indexOfItem(cart, name) !== null;
}

/// 🔎 객체로 만든 장바구니

function add_item(cart, item) {
  return objectSet(cart, item.name, item);
}

function calc_total(cart) {
  let total = 0;
  let names = Object.keys(cart);
  for (let i = 0; i < names.length; i++) {
    let item = cart[names[i]];
    total += item.price;
  }
  return total;
}

function setPriceByName(cart, name, price) {
  if (isInCart(cart, name)) {
    let item = cart[name];
    let copy = setPrice(item, price);
    return objectSet(cart, name, copy);
  } else {
    let item = make_item(name, price);
    return objectSet(cart, name, item);
  }
}

function remove_item_by_name(cart, name) {
  return objectDelete(cart, name);
}

// 🌟 hasOwnProperty!!! 항목이 있는지 확인하는 JS 객체 메서드
function isInCart(cart, name) {
  return cart.hasOwnProperty(name);
}
